import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { ConfigurableFocusTrap, ConfigurableFocusTrapFactory } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
  ViewChild,
  QueryList,
  Renderer2,
  Inject,
  forwardRef,
  ElementRef,
  ChangeDetectorRef,
  HostListener,
  OnDestroy,
  ViewChildren,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import { MdbLightboxItemDirective } from './lightbox-item.directive';
import { MdbLightboxComponent } from './lightbox.component';

@Component({
  selector: 'mdb-lightbox-modal',
  templateUrl: './lightbox-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '1500ms',
          keyframes([
            style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0, easing: 'ease' }),
            style({
              opacity: 1,
              transform: 'scale3d(1, 1, 1)',
              offset: 0.5,
              easing: 'ease',
              display: 'block',
            }),
          ])
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(
          '1500ms',
          keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0.5 }),
            style({ opacity: 0, offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class MdbLightboxModalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('galleryToolbar') galleryToolbar: ElementRef;
  @ViewChild('btnPrevious') btnPrevious: ElementRef;
  @ViewChild('btnNext') btnNext: ElementRef;
  @ViewChild('rightArrow') rightArrow: ElementRef;
  @ViewChild('leftArrow') leftArrow: ElementRef;
  @ViewChild('btnFullsreen') btnFullsreen: ElementRef;
  @ViewChild('btnZoom') btnZoom: ElementRef;
  @ViewChild('loader') loader: ElementRef;
  @ViewChildren('imageWrapper') imageWrappers: QueryList<ElementRef>;
  @ViewChildren('image') images: QueryList<ElementRef>;

  @HostListener('mousemove')
  onHostMousemove(): void {
    this._resetToolsToggler();
  }

  @HostListener('keyup', ['$event'])
  onHostKeyup(event: KeyboardEvent): void {
    this._onKeyup(event);
  }

  @HostListener('click', ['$event.target'])
  onHostClick(target: HTMLElement): void {
    this._resetToolsToggler();

    if (target.tagName !== 'DIV') {
      return;
    }

    this.close();
  }

  lightbox: MdbLightboxComponent;
  lightboxItems: QueryList<MdbLightboxItemDirective>;
  activeLightboxItem: MdbLightboxItemDirective;
  zoomLevel: number;
  index: number;
  total: number;
  animationState = '';
  slideRight: boolean;
  activeModalImageIndex = 1;

  private _slideTimer: ReturnType<typeof setTimeout>;
  private _toolsToggleTimer: ReturnType<typeof setTimeout>;
  private _zoomTimer: ReturnType<typeof setTimeout>;
  private _doubleTapTimer: ReturnType<typeof setTimeout>;
  private _focusTrap: ConfigurableFocusTrap;
  private _previouslyFocusedElement: HTMLElement;
  private _fullscreen = false;
  private _scale = 1;
  private _mousedown = false;
  private _positionX: number;
  private _positionY: number;
  private _mousedownPositionX: number;
  private _mousedownPositionY: number;
  private _originalPositionX: number;
  private _originalPositionY: number;
  private _tapCounter = 0;
  private _tapTime = 0;
  private _toolsTimeout = 4000;
  private _doubleTapTimeout = 300;

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private _cdRef: ChangeDetectorRef,
    private _focusTrapFactory: ConfigurableFocusTrapFactory,
    @Inject(DOCUMENT) private _document,
    @Inject(forwardRef(() => MdbLightboxComponent)) _lightbox: MdbLightboxComponent
  ) {
    this.lightbox = _lightbox;
  }

  ngAfterViewInit(): void {
    this.index = this.lightboxItems.toArray().indexOf(this.activeLightboxItem);
    this.total = this.lightboxItems.toArray().length;
    this._setActiveImageData();

    this._setToolsToggleTimeout();
    this._disableScroll();
    this._previouslyFocusedElement = this._document.activeElement as HTMLElement;
    this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    this._focusTrap.focusInitialElementWhenReady();

    this._setDefaultAnimationStyle();
    this._preloadInactiveImages();
  }

  ngOnDestroy(): void {
    this._previouslyFocusedElement.focus();
    this._focusTrap.destroy();
    this._enableScroll();
  }

  get activeImageElement(): HTMLImageElement {
    return this.images.toArray()[this.activeModalImageIndex].nativeElement;
  }

  get activeImageWrapper(): HTMLElement {
    return this.imageWrappers.toArray()[this.activeModalImageIndex].nativeElement;
  }

  get nextImageWrapper(): HTMLElement {
    if (this.activeModalImageIndex < this.images.length - 1) {
      return this.imageWrappers.toArray()[this.activeModalImageIndex + 1].nativeElement;
    } else if ((this.activeModalImageIndex = this.images.length - 1)) {
      return this.imageWrappers.toArray()[0].nativeElement;
    }
  }

  get previousImageWrapper(): HTMLElement {
    if (this.activeModalImageIndex > 0) {
      return this.imageWrappers.toArray()[this.activeModalImageIndex - 1].nativeElement;
    } else if ((this.activeModalImageIndex = 0)) {
      return this.imageWrappers.toArray()[this.images.length].nativeElement;
    }
  }

  get nextImage(): HTMLImageElement {
    if (this.activeModalImageIndex < this.images.length - 1) {
      return this.images.toArray()[this.activeModalImageIndex + 1].nativeElement;
    } else if (this.activeModalImageIndex === this.images.length - 1) {
      return this.images.toArray()[0].nativeElement;
    }
  }

  get previousImage(): HTMLImageElement {
    if (this.activeModalImageIndex > 0) {
      return this.images.toArray()[this.activeModalImageIndex - 1].nativeElement;
    } else if (this.activeModalImageIndex === 0) {
      return this.images.toArray()[this.images.length - 1].nativeElement;
    }
  }

  onMousedown(event): void {
    const touch = event.touches;
    const x = touch ? touch[0].clientX : event.clientX;
    const y = touch ? touch[0].clientY : event.clientY;

    this._originalPositionX = parseFloat(this.activeImageElement.style.left) || 0;
    this._originalPositionY = parseFloat(this.activeImageElement.style.top) || 0;
    this._positionX = this._originalPositionX;
    this._positionY = this._originalPositionY;
    this._mousedownPositionX = x * (1 / this._scale) - this._positionX;
    this._mousedownPositionY = y * (1 / this._scale) - this._positionY;
    this._mousedown = true;
  }

  onMousemove(event): void {
    if (!this._mousedown) return;

    const touch = event.touches;
    const x = touch ? touch[0].clientX : event.clientX;
    const y = touch ? touch[0].clientY : event.clientY;

    if (touch) this._resetToolsToggler();

    if (this._scale !== 1) {
      this._positionX = x * (1 / this._scale) - this._mousedownPositionX;
      this._positionY = y * (1 / this._scale) - this._mousedownPositionY;

      this._renderer.setStyle(this.activeImageElement, 'left', `${this._positionX}px`);
      this._renderer.setStyle(this.activeImageElement, 'top', `${this._positionY}px`);
    } else {
      if (this.total <= 1) return;

      this._positionX = x * (1 / this._scale) - this._mousedownPositionX;
      this._renderer.setStyle(this.activeImageElement, 'left', `${this._positionX}px`);
    }
  }

  onMouseup(event: MouseEvent): void {
    this._mousedown = false;
    this._moveImg(event.target as HTMLElement);
    this._checkDoubleTap(event);
  }

  zoom(): void {
    if (this._scale === 1) {
      this.zoomIn();
    } else {
      this.zoomOut();
    }
  }

  close(): void {
    this._renderer.setStyle(this.activeImageWrapper, 'transform', 'scale(0.25)');
    this._renderer.setStyle(this.activeImageWrapper, 'opacity', 0);
    this.lightbox.close();
  }

  toggleFullscreen(): void {
    if (this._fullscreen === false) {
      this._renderer.addClass(this.btnFullsreen.nativeElement, 'active');

      if (this._elementRef.nativeElement.requestFullscreen) {
        this._elementRef.nativeElement.requestFullscreen();
      }

      this._fullscreen = true;
    } else {
      this._renderer.removeClass(this.btnFullsreen.nativeElement, 'active');

      if (this._document.exitFullscreen) {
        this._document.exitFullscreen();
      }

      this._fullscreen = false;
    }
  }

  private _setDefaultAnimationStyle(): void {
    this.imageWrappers.toArray().forEach((wrapper, index) => {
      if (index === this.activeModalImageIndex) {
        return;
      }

      const isNextWrapper = index > this.index;

      this._renderer.setStyle(wrapper.nativeElement, 'left', isNextWrapper ? '-100%' : '100%');
      this._renderer.setStyle(wrapper.nativeElement, 'transform', 'scale(0.25)');
    });
  }

  private _preloadInactiveImages(): void {
    const nextIndex = this.index < this.lightboxItems.toArray().length - 1 ? this.index + 1 : 0;
    const previousIndex = this.index > 0 ? this.index - 1 : this.lightboxItems.toArray().length - 1;

    this.previousImage.src =
      this.lightboxItems.toArray()[previousIndex].img ||
      this.lightboxItems.toArray()[previousIndex].el.nativeElement.src;
    this.previousImage.alt = this.lightboxItems.toArray()[previousIndex].el.nativeElement.alt;

    this.nextImage.src =
      this.lightboxItems.toArray()[nextIndex].img ||
      this.lightboxItems.toArray()[nextIndex].el.nativeElement.src;
    this.nextImage.alt = this.lightboxItems.toArray()[nextIndex].el.nativeElement.alt;
  }

  private _onKeyup(event: KeyboardEvent): void {
    this._resetToolsToggler();
    switch (event.key) {
      case 'ArrowRight':
        this.slide();
        break;
      case 'ArrowLeft':
        this.slide('left');
        break;
      case 'Escape':
        this.close();
        break;
      case 'Home':
        this.slide('first');
        break;
      case 'End':
        this.slide('last');
        break;
      case 'ArrowUp':
        this.zoomIn();
        break;
      case 'ArrowDown':
        this.zoomOut();
        break;
      default:
        break;
    }
  }

  private _moveImg(target: HTMLElement): void {
    if (this._scale !== 1 || target !== this.activeImageElement || this.lightboxItems.length <= 1) {
      return;
    }

    const movement = this._positionX - this._originalPositionX;

    if (movement > 0) {
      this.slide('left');
    } else if (movement < 0) {
      this.slide();
    }
  }

  private _setActiveImageData(): void {
    this.activeImageElement.src =
      this.activeLightboxItem.img || this.activeLightboxItem.el.nativeElement.src;
    this.activeImageElement.alt = this.activeLightboxItem.el.nativeElement.alt;
  }

  private _setNewPositionOnZoomIn(event: WheelEvent): void {
    clearTimeout(this._zoomTimer);
    this._positionX = window.innerWidth / 2 - event.offsetX - 50;
    this._positionY = window.innerHeight / 2 - event.offsetY - 50;

    this._renderer.setStyle(this.activeImageElement, 'transition', 'all 0.5s ease-out');
    this._renderer.setStyle(this.activeImageElement, 'left', `${this._positionX}px`);
    this._renderer.setStyle(this.activeImageElement, 'top', `${this._positionY}px`);

    this._zoomTimer = setTimeout(() => {
      this._renderer.setStyle(this.activeImageElement, 'transition', 'none');
    }, 500);
  }

  private _resetToolsToggler(): void {
    this.toggleToolbar(1);
    clearTimeout(this._toolsToggleTimer);
    this._setToolsToggleTimeout();
  }

  toggleToolbar(opacity: number): void {
    this._renderer.setStyle(this.galleryToolbar.nativeElement, 'opacity', opacity);
    this._renderer.setStyle(this.leftArrow.nativeElement, 'opacity', opacity);
    this._renderer.setStyle(this.rightArrow.nativeElement, 'opacity', opacity);
  }

  private _setToolsToggleTimeout(): void {
    this._toolsToggleTimer = setTimeout(() => {
      this.toggleToolbar(0);
      clearTimeout(this._toolsToggleTimer);
    }, this._toolsTimeout);
  }

  onWheel(event: WheelEvent): void {
    if (event.deltaY > 0) {
      this.zoomOut();
    } else {
      if (this._scale >= 3) return;
      this._setNewPositionOnZoomIn(event);
      this.zoomIn();
    }
  }

  zoomIn(): void {
    if (this._scale >= 3) {
      return;
    }

    this.lightbox.lightboxZoomIn.emit();

    this._scale += this.zoomLevel;
    this._renderer.setStyle(this.activeImageWrapper, 'transform', `scale(${this._scale})`);
    this._updateZoomBtn();

    this.lightbox.lightboxZoomedIn.emit();
  }

  zoomOut(): void {
    if (this._scale <= 1) {
      return;
    }

    this.lightbox.lightboxZoomOut.emit();

    this._scale -= this.zoomLevel;
    this._renderer.setStyle(this.activeImageWrapper, 'transform', `scale(${this._scale})`);

    this._updateZoomBtn();
    this._updateImgPosition();

    this.lightbox.lightboxZoomedOut.emit();
  }

  slide(target = 'right'): void {
    if (this.lightboxItems.length <= 1) {
      return;
    }
    this.lightbox.lightboxSlide.emit();

    if (target === 'right' || target === 'first') {
      this.slideRight = true;
    } else {
      this.slideRight = false;
    }

    clearTimeout(this._slideTimer);

    this._renderer.setStyle(this.activeImageWrapper, 'transform', 'scale(0.25)');
    this._renderer.setStyle(this.activeImageWrapper, 'left', this.slideRight ? '-100%' : '100%');

    if (target === 'right' || target === 'first') {
      this.slideRight = true;
    } else {
      this.slideRight = false;
    }

    clearTimeout(this._slideTimer);

    this._renderer.setStyle(this.activeImageWrapper, 'transform', 'scale(0.25)');
    this._renderer.setStyle(this.activeImageWrapper, 'left', this.slideRight ? '-100%' : '100%');

    switch (target) {
      case 'right':
        this.index + 1 === this.total ? (this.index = 0) : (this.index += 1);
        this.activeModalImageIndex + 1 === this.imageWrappers.length
          ? (this.activeModalImageIndex = 0)
          : (this.activeModalImageIndex += 1);
        break;
      case 'left':
        this.index - 1 < 0 ? (this.index = this.total - 1) : (this.index -= 1);
        this.activeModalImageIndex - 1 < 0
          ? (this.activeModalImageIndex = this.imageWrappers.length - 1)
          : (this.activeModalImageIndex -= 1);
        break;
      case 'first':
        this.index = 0;
        this.activeModalImageIndex = 0;
        break;
      case 'last':
        this.index = this.lightboxItems.length - 1;
        this.activeModalImageIndex = 2;
        break;
      default:
        break;
    }

    this._updateActiveLightboxItem();
    this._preloadInactiveImages();

    if (this.activeImageElement.src) {
      return;
    }

    fromEvent(this.activeImageWrapper, 'transitionend')
      .pipe(take(1))
      .subscribe(() => {
        this._showLoader();
      });
  }

  reset(): void {
    if (this._fullscreen) {
      this.toggleFullscreen();
    }

    this._restoreDefaultPosition();
    this._restoreDefaultZoom();
    clearTimeout(this._toolsToggleTimer);
    clearTimeout(this._doubleTapTimer);
  }

  private _disableScroll(): void {
    this._renderer.addClass(this._document.body, 'disabled-scroll');

    if (this._document.documentElement.scrollHeight > this._document.documentElement.clientHeight) {
      this._renderer.addClass(this._document.body, 'replace-scrollbar');
    }
  }

  private _enableScroll(): void {
    this._renderer.removeClass(this._document.body, 'disabled-scroll');
    this._renderer.removeClass(this._document.body, 'replace-scrollbar');
  }

  private _restoreDefaultZoom(): void {
    if (this._scale !== 1) {
      this._scale = 1;

      this._renderer.setStyle(this.activeImageWrapper, 'transform', `scale(${this._scale})`);

      this._updateZoomBtn();
      this._updateImgPosition();
    }
  }

  private _updateImgPosition(): void {
    if (this._scale === 1) {
      this._restoreDefaultPosition();
    }
  }

  private _checkDoubleTap(event: MouseEvent): void {
    clearTimeout(this._doubleTapTimer);
    const currentTime = new Date().getTime();
    const tapLength = currentTime - this._tapTime;

    if (this._tapCounter > 0 && tapLength < 500) {
      this._onDoubleClick(event);
      this._doubleTapTimer = setTimeout(() => {
        this._tapTime = new Date().getTime();
        this._tapCounter = 0;
      }, this._doubleTapTimeout);
    } else {
      this._tapCounter++;
      this._tapTime = new Date().getTime();
    }
  }

  private _onDoubleClick(event: MouseEvent | TouchEvent): void {
    const touchEvent = event as TouchEvent;

    if (touchEvent.touches) {
      this._setNewPositionOnZoomIn(event as WheelEvent);
    }

    if (this._scale !== 1) {
      this._restoreDefaultZoom();
    } else {
      this.zoomIn();
    }
  }

  private _updateZoomBtn(): void {
    if (this._scale > 1) {
      this._renderer.addClass(this.btnZoom.nativeElement, 'active');
      this._renderer.setAttribute(this.btnZoom.nativeElement, 'aria-label', 'Zoom out');
    } else {
      this._renderer.removeClass(this.btnZoom.nativeElement, 'active');
      this._renderer.setAttribute(this.btnZoom.nativeElement, 'aria-label', 'Zoom in');
    }
  }

  private _restoreDefaultPosition(): void {
    clearTimeout(this._zoomTimer);

    this._renderer.setStyle(this.activeImageElement, 'left', 0);
    this._renderer.setStyle(this.activeImageElement, 'top', 0);
    this._renderer.setStyle(this.activeImageElement, 'transition', 'all 0.5s ease-out');

    this._calculateImgSize();

    setTimeout(() => {
      this._renderer.setStyle(this.activeImageElement, 'transition', 'none');
    }, 500);
  }

  private _updateActiveLightboxItem(): void {
    this.activeLightboxItem = this.lightboxItems.toArray()[this.index];
    this._setActiveImageData();
    this._cdRef.markForCheck();
  }

  load(): void {
    this._hideLoader();

    if (this.activeImageWrapper.style.transform == 'scale(0.25)') {
      this._renderer.setStyle(this.activeImageWrapper, 'transition', 'none');
      this._renderer.setStyle(this.activeImageWrapper, 'left', this.slideRight ? '100%' : '-100%');

      this._slideTimer = setTimeout(() => {
        this._renderer.setStyle(this.activeImageWrapper, 'transition', '');
        this._renderer.setStyle(this.activeImageWrapper, 'left', '0');
        this._renderer.setStyle(this.activeImageWrapper, 'transform', 'scale(1)');

        this.lightbox.lightboxSlided.emit();
      }, 0);
    }

    this._calculateImgSize();
  }

  private _showLoader(): void {
    if (this.activeImageElement.src) {
      return;
    }
    this._renderer.setStyle(this.loader.nativeElement, 'opacity', 1);
  }

  private _hideLoader(): void {
    this._renderer.setStyle(this.loader.nativeElement, 'opacity', 0);
  }

  private _calculateImgSize(): void {
    if (this.activeImageElement.width >= this.activeImageElement.height) {
      this._renderer.setStyle(this.activeImageElement, 'width', '100%');
      this._renderer.setStyle(this.activeImageElement, 'maxWidth', '100%');
      this._renderer.setStyle(this.activeImageElement, 'height', 'auto');

      const top = `${
        (this.activeImageWrapper.offsetHeight - this.activeImageElement.height) / 2
      }px`;

      this._renderer.setStyle(this.activeImageElement, 'top', top);
      this._renderer.setStyle(this.activeImageElement, 'left', 0);
    } else {
      this._renderer.setStyle(this.activeImageElement, 'height', '100%');
      this._renderer.setStyle(this.activeImageElement, 'maxHeight', '100%');
      this._renderer.setStyle(this.activeImageElement, 'width', 'auto');

      const left = `${(this.activeImageWrapper.offsetWidth - this.activeImageElement.width) / 2}px`;

      this._renderer.setStyle(this.activeImageElement, 'left', left);
      this._renderer.setStyle(this.activeImageElement, 'top', 0);
    }

    if (this.activeImageElement.width >= this.activeImageWrapper.offsetWidth) {
      this._renderer.setStyle(
        this.activeImageElement,
        'width',
        `${this.activeImageWrapper.offsetWidth}px`
      );
      this._renderer.setStyle(this.activeImageElement, 'height', 'auto');
      this._renderer.setStyle(this.activeImageElement, 'height', 'auto');

      const top = `${
        (this.activeImageWrapper.offsetHeight - this.activeImageElement.height) / 2
      }px`;

      this._renderer.setStyle(this.activeImageElement, 'top', top);
      this._renderer.setStyle(this.activeImageElement, 'left', 0);
    }

    if (this.activeImageElement.height >= this.activeImageWrapper.offsetHeight) {
      this._renderer.setStyle(
        this.activeImageElement,
        'height',
        `${this.activeImageWrapper.offsetHeight}px`
      );
      this._renderer.setStyle(this.activeImageElement, 'width', 'auto');
      this._renderer.setStyle(this.activeImageElement, 'top', 0);

      const left = `${(this.activeImageWrapper.offsetWidth - this.activeImageElement.width) / 2}px`;

      this._renderer.setStyle(this.activeImageElement, 'left', left);
    }
  }
}
