import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components/alert/alert.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NavComponent } from './_components/nav/nav.component';
import { FooterComponent } from './_components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { NgxCaptchaModule } from "ngx-captcha";
import { ModalComponent } from './_components/modal/modal.component';
import { ModalSelectComponent } from './_components/modal-select/modal-select.component';
import { FilterFromPipe } from './_helpers/filter-from.pipe';
import { ChatChannelsTableComponent } from './_components/chat-channels-table/chat-channels-table.component';
import { NewChatChannelComponent } from './pages/chat/new-chat-channel/new-chat-channel.component';
import { EditChatChannelComponent } from './pages/chat/edit-chat-channel/edit-chat-channel.component';
import { ViewChatChannelComponent } from './pages/chat/view-chat-channel/view-chat-channel.component';
import { RouterModule } from '@angular/router';

import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbAutocompleteModule } from 'mdb-angular-ui-kit/autocomplete';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbChartModule } from 'mdb-angular-ui-kit/charts';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbInfiniteScrollModule } from 'mdb-angular-ui-kit/infinite-scroll';
import { MdbLazyLoadingModule } from 'mdb-angular-ui-kit/lazy-loading';
import { MdbLightboxModule } from 'mdb-angular-ui-kit/lightbox';
import { MdbLoadingModule } from 'mdb-angular-ui-kit/loading';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRatingModule } from 'mdb-angular-ui-kit/rating';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollbarModule } from 'mdb-angular-ui-kit/scrollbar';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbSmoothScrollModule } from 'mdb-angular-ui-kit/smooth-scroll';
import { MdbStepperModule } from 'mdb-angular-ui-kit/stepper';
import { MdbStickyModule } from 'mdb-angular-ui-kit/sticky';
import { MdbTableModule } from 'mdb-angular-ui-kit/table';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTimepickerModule } from 'mdb-angular-ui-kit/timepicker';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { KeycloakService } from './_services/keycloak.service';

export function initKeycloak(keycloak: KeycloakService) {
  return () => keycloak.init();
}

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    ModalComponent,
    ModalSelectComponent,
    FilterFromPipe,
    ChatChannelsTableComponent,
    NewChatChannelComponent,
    EditChatChannelComponent,
    ViewChatChannelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    MdbAccordionModule,
    MdbAutocompleteModule,
    MdbCarouselModule,
    MdbChartModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDatepickerModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbInfiniteScrollModule,
    MdbLazyLoadingModule,
    MdbLightboxModule,
    MdbLoadingModule,
    MdbModalModule,
    MdbNotificationModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRatingModule,
    MdbRippleModule,
    MdbScrollbarModule,
    MdbScrollspyModule,
    MdbSelectModule,
    MdbSidenavModule,
    MdbSmoothScrollModule,
    MdbStepperModule,
    MdbStickyModule,
    MdbTableModule,
    MdbTabsModule,
    MdbTimepickerModule,
    MdbTooltipModule,
    MdbValidationModule,
  ],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initKeycloak,
      deps: [KeycloakService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


