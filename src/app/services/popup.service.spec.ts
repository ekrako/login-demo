/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PopupService } from './popup.service';

describe('PopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupService]
    });
  });

  it('should ...', inject([PopupService], (service: PopupService) => {
    expect(service).toBeTruthy();
  }));
});
