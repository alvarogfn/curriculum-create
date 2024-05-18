import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class TextareaComponent implements AfterViewInit {
  @Input() label: string = '';
  @Input() controlName: string = '';
  @Input() cols: number = 1;
  @Input() rows: number = 1;
  textareaElement: HTMLElement | null = null;
  textareaHeight: number = 60;
  @Input() value: AbstractControl | null = null;

  @ViewChild('textarea') textareaRef: ElementRef | undefined;

  resize() {
    const actualHeight = +(this.textareaElement?.clientHeight ?? 0);
    const scrollHeight = +(this.textareaElement?.scrollHeight ?? 0);

    if (actualHeight < scrollHeight)
      this.textareaHeight = this.textareaElement?.scrollHeight! + 5;
    // + 5 is just a hack for the scroll bar doesnt appear
  }

  ngAfterViewInit(): void {
    this.textareaElement = this.textareaRef
      ?.nativeElement as HTMLTextAreaElement;
    this.resize();
  }
}
