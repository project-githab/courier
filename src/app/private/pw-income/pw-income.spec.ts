import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwIncome } from './pw-income';

describe('PwIncome', () => {
  let component: PwIncome;
  let fixture: ComponentFixture<PwIncome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwIncome],
    }).compileComponents();

    fixture = TestBed.createComponent(PwIncome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
