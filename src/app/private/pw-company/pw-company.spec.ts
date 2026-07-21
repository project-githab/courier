import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwCompany } from './pw-company';

describe('PwCompany', () => {
  let component: PwCompany;
  let fixture: ComponentFixture<PwCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwCompany],
    }).compileComponents();

    fixture = TestBed.createComponent(PwCompany);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
