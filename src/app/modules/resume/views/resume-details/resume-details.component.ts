import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Resume } from 'src/app/models/resume.model';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.scss'],
})
export class ResumeDetailsComponent implements OnInit {
  resume: Resume | null = null;

  constructor(
    private resumeService: ResumeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((params: ParamMap) => params.get('id') ?? ''))
      .pipe(switchMap((id: string) => this.resumeService.getResumeById(id)))
      .subscribe({
        next: (resume) => (this.resume = resume),
        error: () => this.router.navigate(['listagem']),
      });
  }

  deleteResume(id: string) {
    this.resumeService.deleteResume(id);
    this.router.navigate(['listagem']);
  }

  exportResume(id: string) {
    this.resumeService.exportResume(id);
  }
}
