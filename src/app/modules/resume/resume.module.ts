import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { FormComponent } from './components/form/form.component';
import { ResumeListComponent } from './views/resume-list/resume-list.component';
import { ResumeCreatorComponent } from './views/resume-creator/resume-creator.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeListCardComponent } from './components/resume-list-card/resume-list-card.component';
import { TelephonePipe } from 'src/app/pipes/telephone.pipe';
import { ResumeDetailsComponent } from './views/resume-details/resume-details.component';
import { CpfPipe } from 'src/app/pipes/cpf.pipe';
import { DateFormaterPipe } from 'src/app/pipes/date-formater.pipe';
import { DetailsTableComponent } from './components/details-table/details-table.component';
import { ImportResumeComponent } from './views/import-resume/import-resume.component';

@NgModule({
  declarations: [
    ResumeComponent,
    ResumeListComponent,
    ResumeCreatorComponent,
    FormComponent,
    NavbarComponent,
    ResumeListCardComponent,
    TelephonePipe,
    CpfPipe,
    DateFormaterPipe,
    ResumeDetailsComponent,
    DetailsTableComponent,
    ImportResumeComponent,
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ResumeModule {}
