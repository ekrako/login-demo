import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateMDN(mdn) {
    const re = /^(05[0-9]{8})$/;
    return re.test(mdn);
  }

  validatePassword(password) {
    const re = /^((?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10})$/;
    return re.test(password);
  }
}
