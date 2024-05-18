import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputComponent {
  @Input() value: AbstractControl | null = null;
  @Input() label: string = '';
  @Input() basis: number = 100;
  @Input() type: string = 'text';
  @Input() controlName: string = '';
  @Input() required: boolean = false;
  @Input() pattern: RegExp | string = '';
  @Input() mask: string = '';
}
