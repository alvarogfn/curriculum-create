import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';
import { LabelComponent } from './components/label/label.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { EmptyComponent } from './components/empty/empty.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

@NgModule({
  declarations: [
    TitleComponent,
    CardComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    LabelComponent,
    ButtonComponent,
    InputErrorComponent,
    EmptyComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    InputComponent,
    TitleComponent,
    SelectComponent,
    TextareaComponent,
    CardComponent,
    ButtonComponent,
    EmptyComponent,
  ],
})
export class LayoutModule {}
