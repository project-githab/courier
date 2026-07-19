import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwProfile } from './pw-profile';

describe('PwProfile', () => {
  let component: PwProfile;
  let fixture: ComponentFixture<PwProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(PwProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
