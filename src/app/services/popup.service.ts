import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PopupService {

  _popups: any[];
  constructor(private http: Http) { }

  getPopupBundle(appId, lang = 'he') {
    let headers = new Headers();
    headers.append('Conetnt-Type', 'application/json');
    return this.http.get('https://enigmatic-headland-95760.herokuapp.com/pele/getBundle/' + appId + '/' + lang)//, { headers: headers })
      .map(res => res.json());
  }
  set popups(popups) {
    localStorage.setItem('popups', JSON.stringify(popups));
    this._popups = popups;
  }
  loadPopups() {
    const popups = JSON.parse(localStorage.getItem('popups'));
    this._popups = popups;
  }
  getPopup(id) {
    this.loadPopups();
    return this._popups.find(popup => popup.PopupID === id);
  }
}
