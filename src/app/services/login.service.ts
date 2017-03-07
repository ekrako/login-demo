import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { isDevMode } from '@angular/core';
import { AppSettings } from '../appSettings';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  _userToken: string;
  _register: string;
  _mdn: string;
  constructor(private http: Http) { }

  getUserTokenByHI(appId) {
    const req = { ApplicationID: appId };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (isDevMode()) {
      headers.append('encr_MSISDN', AppSettings.ENC_MDN);
      return this.http.post('https://enigmatic-headland-95760.herokuapp.com/login/api/GetUserTokenByHI', req, { headers: headers })
        .map(res => res.json());
    };
    return this.http.post('http://login.pelephone.co.il/api/GetUserTokenByHI', req, { headers: headers })
      .map(res => res.json());
  }
  set userToken(userToken) {
    localStorage.setItem('userToken', userToken);
    this._userToken = userToken;
  }
  get userToken() {
    this._userToken = localStorage.getItem('userToken');
    return this._userToken;
  }
  set mdn(mdn) {
    localStorage.setItem('mdn', mdn);
    this._userToken = mdn;
  }
  get mdn() {
    this._mdn = localStorage.getItem('mdn');
    return this._mdn;
  }
  set register(register) {
    localStorage.setItem('register', register);
    this._userToken = register;
  }
  get register() {
    this._register = localStorage.getItem('register');
    return this._register;
  }
  auth2user(appId, userToken) {
    const req = { ApplicationID: appId, UserToken: userToken, Register: "N" };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://login.pelephone.co.il/api/Auth2User', req, { headers: headers })
      .map(res => res.json());
  }
  sendotp(mdn) {
    const req = {
      MDN: mdn,
      ApplicationID: AppSettings.APP_ID
    }
    this.mdn = mdn;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://login.pelephone.co.il/api/SendOTP', req, { headers: headers })
      .map(res => res.json());
  }
  validateotp(otp) {
    const req = {
      MDN: this.mdn,
      OTP: otp,
      Register: this.register,
      ApplicationID: AppSettings.APP_ID
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://login.pelephone.co.il/api/GetTokenByOTP', req, { headers: headers })
      .map(res => res.json());
  }
  validateuserpassword(user, password) {
    const req = {
      USER: user,
      PASSWORD: password,
      ApplicationID: AppSettings.APP_ID
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://login.pelephone.co.il/api/GetTokenByUserPassword', req, { headers: headers })
      .map(res => res.json());
  }
  logout() {
    localStorage.clear();
    this._mdn = null;
    this._register = null;
    this._userToken = null;
  }

}
