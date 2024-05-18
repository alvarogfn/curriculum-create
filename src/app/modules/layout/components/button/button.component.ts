import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() onClick: () => void = () => {};
  @Input() disabled: boolean = false;
  @Input() type: 'submit' | 'button' = 'button';
}
