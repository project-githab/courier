import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwFinance } from './pw-finance';

describe('PwFinance', () => {
  let component: PwFinance;
  let fixture: ComponentFixture<PwFinance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwFinance],
    }).compileComponents();

    fixture = TestBed.createComponent(PwFinance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
