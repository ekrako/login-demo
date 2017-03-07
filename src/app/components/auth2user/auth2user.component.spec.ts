import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth2userComponent } from './auth2user.component';

describe('Auth2userComponent', () => {
  let component: Auth2userComponent;
  let fixture: ComponentFixture<Auth2userComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth2userComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth2userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
