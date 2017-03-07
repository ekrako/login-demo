import { Component, OnInit } from '@angular/core';
import { FlashMessagesService }  from 'angular2-flash-messages';
import { PopupService } from '../../services/popup.service';
import { LoginService } from '../../services/login.service';
import { ValidateService } from '../../services/validate.service';
import { AppSettings } from '../../appSettings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private popupService: PopupService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onLoginSubmit() {
    if (!this.validateService.validateMDN(this.username) && !this.validateService.validateEmail(this.username)) {
      this.flashMessage.show('Please enter a Valid username', { cssClass: 'alert-danger', timeout: 3000 });
      return false
    }
    if (!this.validateService.validatePassword(this.password)) {
      this.flashMessage.show('Please enter a Valid password', { cssClass: 'alert-danger', timeout: 3000 });
      return false
    }
    this.loginService.validateuserpassword(this.username, this.password).subscribe(data => {
      if (data.RetCode == '0') {
        this.loginService.userToken = data.UserToken;
        this.router.navigate(['/auth2user']);
      } else {
        this.flashMessage.show(this.popupService.getPopup(data.PopUpID).PopupText, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }
}
