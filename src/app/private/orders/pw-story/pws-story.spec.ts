import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwsStory } from './pws-story';

describe('PwsStory', () => {
  let component: PwsStory;
  let fixture: ComponentFixture<PwsStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwsStory],
    }).compileComponents();

    fixture = TestBed.createComponent(PwsStory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
