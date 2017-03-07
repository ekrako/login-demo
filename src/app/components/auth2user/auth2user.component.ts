import { Component, OnInit } from '@angular/core';
import { FlashMessagesService }  from 'angular2-flash-messages';
import { PopupService } from '../../services/popup.service';
import { LoginService } from '../../services/login.service';
import { AppSettings } from '../../appSettings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth2user',
  templateUrl: './auth2user.component.html',
  styleUrls: ['./auth2user.component.css']
})
export class Auth2userComponent implements OnInit {
  appParams: any;
  accessToken: string;
  details: string;
  constructor(
    private popupService: PopupService,
    private loginService: LoginService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log()
    if (!(this.loginService.userToken == null)) {
      this.loginService.auth2user(AppSettings.APP_ID, this.loginService.userToken).subscribe(data => {
        if (data.RetCode == '0') {
          this.loginService.userToken = data.UserToken;
          this.appParams = data.AppsParams;
          this.accessToken = data.AccessToken;
          this.details = JSON.stringify(this.appParams, null, 2);
          this.flashMessage.show('Login Successful', { cssClass: 'alert-success', timeout: 3000 });
        } else if (data.RetDesc == 'PCL_NOT_REGISTERED') {
          this.router.navigate(['/sendotp']);
        } else if (data.RetCode == '10') {
          this.loginService.userToken = null;
          this.router.navigate(['/']);
        } else {
          this.flashMessage.show(this.popupService.getPopup(data.PopUpID).PopupText, { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    }
  }
  onLogoutClick() {
    this.loginService.logout();
    this.flashMessage.show('Logged out successfully', { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/']);
    return false;
  }

}
