import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeCreatorComponent } from './views/resume-creator/resume-creator.component';
import { ResumeListComponent } from './views/resume-list/resume-list.component';
import { ResumeComponent } from './resume.component';
import { ResumeDetailsComponent } from './views/resume-details/resume-details.component';
import { ImportResumeComponent } from './views/import-resume/import-resume.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    children: [
      {
        path: '',
        component: ImportResumeComponent,
      },
      {
        path: 'cadastro',
        component: ResumeCreatorComponent,
      },
      {
        path: 'listagem',
        component: ResumeListComponent,
      },

      {
        path: 'curriculos/:id',
        component: ResumeDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
