import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwsActive } from './pws-active';

describe('PwsActive', () => {
  let component: PwsActive;
  let fixture: ComponentFixture<PwsActive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwsActive],
    }).compileComponents();

    fixture = TestBed.createComponent(PwsActive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
