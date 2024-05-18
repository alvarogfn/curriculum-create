import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Resume } from '../models/resume.model';
import { v4 as uuidv4 } from 'uuid';
import { ResumeForm } from '../models/resume-form.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  resumes: BehaviorSubject<Resume[]>;
  private _resumes: Resume[] = [];

  localStorageKey: string = 'R'; // Could be any name;

  constructor(private LocalStorage: LocalstorageService) {
    try {
      const backedup = this.LocalStorage.get<Resume[]>(this.localStorageKey);
      backedup.forEach((r) => this._resumes.push(r));
    } catch (_) {
      this._resumes = [];
    }

    this.resumes = new BehaviorSubject<Resume[]>(this._resumes);
  }

  saveResume(resume: ResumeForm): Resume {
    let { nascimento } = resume;

    const epoch = new Date(nascimento).valueOf();

    const newResume: Resume = {
      nome: resume.nome,
      sobrenome: resume.sobrenome,
      email: resume.email, //
      nascimento: epoch,
      sexo: resume.sexo,
      telefone: resume.telefone,
      cpf: resume.cpf,
      experiencias: resume.experiencias,
      id: uuidv4(),
    };
    this.updateResumeState(newResume);
    this.saveLocalStorage();

    return newResume;
  }

  deleteResume(id: string): void {
    const index = this.findResumeIndex(id);

    if (index === -1) return;

    this._resumes.splice(index, 1);

    this.resumes.next(this._resumes);
    this.saveLocalStorage();
  }

  exportResume(id: string): void {
    const index = this.findResumeIndex(id);

    const file = new Blob([JSON.stringify(this._resumes[index])], {
      type: 'application/json',
    });

    const fileUrl = window.URL.createObjectURL(file);
    const anchor = document.createElement('a');

    anchor.href = fileUrl;
    anchor.type = 'download';
    anchor.download = 'resume-' + id + '.json';

    anchor.click();

    window.URL.revokeObjectURL(fileUrl);
  }

  importResume(): void {}

  getResumeById(id: string): Observable<Resume> {
    return this.resumes.pipe(
      map((resumes) => {
        const resume: Resume | undefined = resumes.find(
          (resume) => resume.id === id
        );

        if (!resume) throw new Error('Not found');

        return resume;
      })
    );
  }

  private findResumeIndex(id: string): number {
    return this._resumes.findIndex((resume: Resume) => resume.id === id);
    
  }

  private updateResumeState(Resume: Resume) {
    this._resumes.unshift(Resume);
    this.resumes.next(this._resumes);
  }

  private saveLocalStorage() {
    this.LocalStorage.post(this.localStorageKey, this._resumes);
  }
}
