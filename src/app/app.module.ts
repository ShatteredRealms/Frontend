import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { KeycloakService } from './_services/keycloak.service';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { DefaultModule } from './layouts/default/default.module';
import { AdminModule } from './layouts/admin/admin.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewCharacterComponent } from './pages/characters/new-character/new-character.component';
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
import { MdbPopconfirmModule } from 'mdb-angular-ui-kit/popconfirm';
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
import { MdbMultiRangeModule } from 'mdb-angular-ui-kit/multi-range';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export function initKeycloak(keycloak: KeycloakService) {
  return () => keycloak.init();
}

@NgModule({
  declarations: [
    AppComponent,
    NewCharacterComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    AdminModule,
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
    MdbPopconfirmModule,
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
    MdbMultiRangeModule,
    BrowserAnimationsModule,
  ],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initKeycloak,
      deps: [KeycloakService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


