import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from, map } from 'rxjs';
import { ResumeForm } from 'src/app/models/resume-form.model';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-import-resume',
  templateUrl: './import-resume.component.html',
  styleUrls: ['./import-resume.component.scss'],
})
export class ImportResumeComponent {
  filename: string = '';
  file: File | null = null;
  resume: ResumeForm | null = null;

  constructor(private resumeService: ResumeService, private route: Router) {}

  upload(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.file = files.item(0);
    this.filename = this.file?.name ?? '';

    const text = from(this.file?.text() ?? '');
    text
      .pipe(
        map((value) => JSON.parse(value)),
        map((json) => json as ResumeForm)
      )
      .subscribe((resume) => {
        this.resume = resume;
      });
  }


  send() {
    if (this.resume === null) return;
    const newResume = this.resumeService.saveResume(this.resume);

    this.route.navigate(['curriculos', newResume.id]);
  }
}
