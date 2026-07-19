import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwSchedule } from './pw-schedule';

describe('PwSchedule', () => {
  let component: PwSchedule;
  let fixture: ComponentFixture<PwSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwSchedule],
    }).compileComponents();

    fixture = TestBed.createComponent(PwSchedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
