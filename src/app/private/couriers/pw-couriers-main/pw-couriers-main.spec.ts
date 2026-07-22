import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwCouriersMain } from './pw-couriers-main';

describe('PwCouriersMain', () => {
  let component: PwCouriersMain;
  let fixture: ComponentFixture<PwCouriersMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwCouriersMain],
    }).compileComponents();

    fixture = TestBed.createComponent(PwCouriersMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
