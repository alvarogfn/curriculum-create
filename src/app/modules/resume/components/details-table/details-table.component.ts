import { Component, Input, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume.model';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss'],
})
export class DetailsTableComponent {
  @Input() resume: Resume | null = null;
}
