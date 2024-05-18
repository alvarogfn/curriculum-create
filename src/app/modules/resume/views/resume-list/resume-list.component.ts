import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Resume } from 'src/app/models/resume.model';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss'],
})
export class ResumeListComponent implements OnInit {
  resumes: Resume[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.resumes.subscribe((list) => {
      this.resumes = list;
    });
  }
}
