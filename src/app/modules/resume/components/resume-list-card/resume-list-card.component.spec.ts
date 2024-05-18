import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeListCardComponent } from './resume-list-card.component';

describe('ResumeListCardComponent', () => {
  let component: ResumeListCardComponent;
  let fixture: ComponentFixture<ResumeListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
