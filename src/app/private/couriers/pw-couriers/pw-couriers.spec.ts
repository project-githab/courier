import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwCouriers } from './pw-couriers';

describe('PwCouriers', () => {
  let component: PwCouriers;
  let fixture: ComponentFixture<PwCouriers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwCouriers],
    }).compileComponents();

    fixture = TestBed.createComponent(PwCouriers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
