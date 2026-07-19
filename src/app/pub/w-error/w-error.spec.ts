import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WError } from './w-error';

describe('WError', () => {
  let component: WError;
  let fixture: ComponentFixture<WError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WError],
    }).compileComponents();

    fixture = TestBed.createComponent(WError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
