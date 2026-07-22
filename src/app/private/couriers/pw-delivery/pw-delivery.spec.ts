import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwDelivery } from './pw-delivery';

describe('PwDelivery', () => {
  let component: PwDelivery;
  let fixture: ComponentFixture<PwDelivery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwDelivery],
    }).compileComponents();

    fixture = TestBed.createComponent(PwDelivery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
