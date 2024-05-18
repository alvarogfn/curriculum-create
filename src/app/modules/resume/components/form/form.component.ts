import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeForm } from 'src/app/models/resume-form.model';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  resumeForm: UntypedFormGroup;
  formIsValid: boolean = false;

  constructor(private resumeService: ResumeService, private router: Router) {
    this.resumeForm = new UntypedFormGroup({
      nome: new UntypedFormControl(null, {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      sobrenome: new UntypedFormControl(null, {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      nascimento: new UntypedFormControl(null, {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      email: new UntypedFormControl(null, {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      }),
      telefone: new UntypedFormControl(null, {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      cpf: new UntypedFormControl(null, {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      sexo: new UntypedFormControl(null),
      experiencias: new UntypedFormControl(null, {
        validators: [Validators.required],
        updateOn: 'change',
      }),
    });
  }
  ngOnInit(): void {
    this.resumeForm.valueChanges.subscribe((_) => {
      this.formIsValid = this.resumeForm.valid;
    });
  }

  onSubmit() {
    const newResume: ResumeForm = this.resumeForm.value;
    const addedResume = this.resumeService.saveResume(newResume);
    this.router.navigate(['curriculos', addedResume.id]);
  }
}
