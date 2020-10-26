import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './pages/home/components/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PurposesComponent } from './pages/home/components/purposes/purposes.component';
import { AboutComponent } from './pages/home/components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApplicationModalComponent } from './components/application-modal/modal.component';
import { PartnersComponent } from './pages/home/components/partners/partners.component';
import { TargetAudienceComponent } from './pages/home/components/target-audience/target-audience.component';
import {GoogleAnaliticsService} from "./services/google-analitics.service";
import {AppRoutingModule} from "./app-routing.module";
import { PrivacyPolicyComponent } from './pages/home/components/privacy-policy/privacy-policy.component';
import { HomeComponent } from './pages/home/home.component';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { ServiceModalComponent } from './pages/home/components/service-modal/service-modal.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    PurposesComponent,
    AboutComponent,
    FooterComponent,
    ApplicationModalComponent,
    PartnersComponent,
    TargetAudienceComponent,
    PrivacyPolicyComponent,
    HomeComponent,
    VacancyComponent,
    ServiceModalComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      GoogleAnaliticsService,
      Title
  ],
  bootstrap: [AppComponent],
  entryComponents: [
      ApplicationModalComponent,
      ServiceModalComponent,
  ]
})
export class AppModule { }
