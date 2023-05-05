import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRideComponent } from './view-ride.component';

describe('ViewRideComponent', () => {
  let component: ViewRideComponent;
  let fixture: ComponentFixture<ViewRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
