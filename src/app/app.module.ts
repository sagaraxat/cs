import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PurchasepartsComponent } from './purchaseparts/purchaseparts.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { PickdropfromComponent } from './pickdropfrom/pickdropfrom.component';
import { SearchcontersComponent } from './searchconters/searchconters.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PurchasepartsComponent,
    HelpComponent,
    ContactComponent,
    PickdropfromComponent,
    SearchcontersComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
