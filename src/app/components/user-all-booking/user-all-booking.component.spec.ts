import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllBookingComponent } from './user-all-booking.component';

describe('UserAllBookingComponent', () => {
  let component: UserAllBookingComponent;
  let fixture: ComponentFixture<UserAllBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
