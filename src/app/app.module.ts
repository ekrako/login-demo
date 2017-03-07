import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule }  from 'angular2-flash-messages';


//Settings

import { AppSettings } from './appSettings';

// Services
import { PopupService } from './services/popup.service';
import { LoginService } from './services/login.service';
import { ValidateService } from './services/validate.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Auth2userComponent } from './components/auth2user/auth2user.component';
import { SendotpComponent } from './components/sendotp/sendotp.component';
import { ValidateOtpComponent } from './components/validate-otp/validate-otp.component';
import { UserPasswordComponent } from './components/user-password/user-password.component';

//Routes

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth2user', component: Auth2userComponent },
  { path: 'sendotp', component: SendotpComponent },
  { path: 'validateotp', component: ValidateOtpComponent },
  { path: 'login', component: UserPasswordComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Auth2userComponent,
    SendotpComponent,
    ValidateOtpComponent,
    UserPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PopupService,
    LoginService,
    ValidateService,
    AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
