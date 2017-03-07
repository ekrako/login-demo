import { Component, OnInit } from '@angular/core';
import { FlashMessagesService }  from 'angular2-flash-messages';
import { PopupService } from '../../services/popup.service';
import { LoginService } from '../../services/login.service';
import { ValidateService } from '../../services/validate.service';
import { AppSettings } from '../../appSettings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendotp',
  templateUrl: './sendotp.component.html',
  styleUrls: ['./sendotp.component.css']
})
export class SendotpComponent implements OnInit {
  mdn: string;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private popupService: PopupService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSendOtpSubmit() {
    if (!this.validateService.validateMDN(this.mdn)) {
      this.flashMessage.show('Please enter a Valid phone numeber', { cssClass: 'alert-danger', timeout: 3000 });
      return false
    }
    this.loginService.sendotp(this.mdn).subscribe(data => {
      if (data.RetCode == '0') {
        this.loginService.register = data.Register;
        this.router.navigate(['/validateotp']);
      } else {
        this.flashMessage.show(this.popupService.getPopup(data.PopUpID).PopupText, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

}
