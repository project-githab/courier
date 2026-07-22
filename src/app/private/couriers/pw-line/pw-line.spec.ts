import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwLine } from './pw-line';

describe('PwLine', () => {
  let component: PwLine;
  let fixture: ComponentFixture<PwLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwLine],
    }).compileComponents();

    fixture = TestBed.createComponent(PwLine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
