import { Component, OnInit } from '@angular/core';
import { FlashMessagesService }  from 'angular2-flash-messages';
import { PopupService } from '../../services/popup.service';
import { LoginService } from '../../services/login.service';
import { AppSettings } from '../../appSettings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popups: any;
  status: string;
  done: boolean;
  constructor(
    private popupService: PopupService,
    private loginService: LoginService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.done = false;
    this.popupService.getPopupBundle(AppSettings.APP_ID).subscribe(data => {
      if (data.RetCode == '0') {
        this.popupService.popups = data.PopUps;
      }
    });
    this.loginService.getUserTokenByHI(AppSettings.APP_ID).subscribe(data => {
      if (data.RetCode == '0') {
        this.loginService.userToken = data.UserToken;
      }
      if (this.loginService.userToken == null) {
        this.done = true;
        this.flashMessage.show('Failed to login through network identification', { cssClass: 'alert-info', timeout: 5000 });
      } else {
        this.router.navigate(['/auth2user']);
      }
    });

  }

}
