import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCheckComponent } from './donation-check.component';

describe('DonationCheckComponent', () => {
  let component: DonationCheckComponent;
  let fixture: ComponentFixture<DonationCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
