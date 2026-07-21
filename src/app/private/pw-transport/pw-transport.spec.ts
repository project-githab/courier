import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwTransport } from './pw-transport';

describe('PwTransport', () => {
  let component: PwTransport;
  let fixture: ComponentFixture<PwTransport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwTransport],
    }).compileComponents();

    fixture = TestBed.createComponent(PwTransport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
