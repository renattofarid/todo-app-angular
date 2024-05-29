import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'login-button',
  standalone: true,
  imports: [],
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      class="w-full bg-[#0575E6] hover:bg-blue-700 text-white font-light py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline disabled:opacity-70 disabled:cursor-not-allowed"
      (click)="onClick.emit()"
    >
      {{ text }}
    </button>
  `,
})
export class LoginButtonComponent {
  @Input()
  type: string = 'button' || 'submit' || 'reset';

  @Input()
  text: string = 'Ingresar';

  @Input()
  disabled: boolean = false;

  @Output()
  onClick: EventEmitter<void> = new EventEmitter<void>();
}
