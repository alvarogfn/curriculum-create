import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  @Input() label: string = '';
  @Input() cols: number = 1;
  @Input() rows: number = 1;
}
