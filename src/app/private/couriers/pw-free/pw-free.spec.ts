import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwFree } from './pw-free';

describe('PwFree', () => {
  let component: PwFree;
  let fixture: ComponentFixture<PwFree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwFree],
    }).compileComponents();

    fixture = TestBed.createComponent(PwFree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
