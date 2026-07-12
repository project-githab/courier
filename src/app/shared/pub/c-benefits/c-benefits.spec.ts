import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBenefits } from './c-benefits';

describe('CBenefits', () => {
  let component: CBenefits;
  let fixture: ComponentFixture<CBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CBenefits],
    }).compileComponents();

    fixture = TestBed.createComponent(CBenefits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
