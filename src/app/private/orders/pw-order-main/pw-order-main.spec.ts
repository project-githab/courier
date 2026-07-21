import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwOrderMain } from './pw-order-main';

describe('PwOrderMain', () => {
  let component: PwOrderMain;
  let fixture: ComponentFixture<PwOrderMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwOrderMain],
    }).compileComponents();

    fixture = TestBed.createComponent(PwOrderMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
