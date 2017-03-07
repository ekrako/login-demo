import { Component, OnInit } from '@angular/core';
import { FlashMessagesService }  from 'angular2-flash-messages';
import { PopupService } from '../../services/popup.service';
import { LoginService } from '../../services/login.service';
import { ValidateService } from '../../services/validate.service';
import { AppSettings } from '../../appSettings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-otp',
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.css']
})
export class ValidateOtpComponent implements OnInit {
  otp: string;
  register: string;
  tos: string;
  submitButtontext: string
  constructor(
    private flashMessage: FlashMessagesService,
    private popupService: PopupService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.register = this.loginService.register;
    this.tos = this.popupService.getPopup(AppSettings.TOS_POPUP).PopupText;
    this.submitButtontext = this.register == 'Y' ? 'Register' : 'Submit'
  }
  onValidateOtpSubmit() {
    this.loginService.validateotp(this.otp).subscribe(data => {
      if (data.RetCode == '0') {
        this.loginService.userToken = data.UserToken;
        this.router.navigate(['/auth2user']);
      } else {
        this.flashMessage.show(this.popupService.getPopup(data.PopUpID).PopupText, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

}
