import { Component, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'login-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <input
      [type]="type"
      class="py-3 px-4 w-full border border-1 rounded-xl"
      [placeholder]="placeholder"
      [name]="name"
      [value]="value"
      (input)="onInputChange($event)"
      [formControl]="control"
      required
    />
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LoginInputComponent,
      multi: true
    }
  ]
})
export class LoginInputComponent {
  @Input()
  type: string = 'text';

  @Input()
  placeholder: string = 'Ingresa un texto';

  @Input()
  value: string = '';

  @Input()
  name: string = '';

  @Input()
  control: FormControl = new FormControl();

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.onChange(inputElement.value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
