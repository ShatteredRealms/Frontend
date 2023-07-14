import { Component } from '@angular/core';
import { MdbModalRef } from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-modal-select',
  templateUrl: './modal-select.component.html',
  styleUrls: ['./modal-select.component.scss']
})
export class ModalSelectComponent<T> {
  ignoreOptions: T[] = [];
  options: T[] = [];
  selectedOptions: T[] = [];

  title: string | null;
  message: string | null;

  itemViewProperty: keyof T;

  constructor(
    public modalRef: MdbModalRef<ModalSelectComponent<T>>
  ) {
  }

  closeWithSelection() {
    this.modalRef.close(this.selectedOptions);
  }

  getDisplayName(option: any): any {
    if (this.itemViewProperty) {
      return option[this.itemViewProperty];
    }

    return Object.values(option)[0];
  }
}
