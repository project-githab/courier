import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpPanel } from './cp-panel';

describe('CpPanel', () => {
  let component: CpPanel;
  let fixture: ComponentFixture<CpPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(CpPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
