import { Component, Input, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume.model';

@Component({
  selector: 'app-resume-list-card',
  templateUrl: './resume-list-card.component.html',
  styleUrls: ['./resume-list-card.component.scss'],
})
export class ResumeListCardComponent {
  @Input() resume: Resume | null = null;
}
