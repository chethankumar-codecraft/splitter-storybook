import { Component, ElementRef, input, output, viewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TipForm } from '../tip-form/tip-form';

@Component({
  selector: 'app-tip-input',
  imports: [],
  templateUrl: './tip-input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TipInput,
    },
  ],
})
export class TipInput implements ControlValueAccessor {
  /** the label for the input field */
  label = input<string>(`Tip Amount:`);

  /**optional error message */
  error = input<string | null>(null);

  /**value for the input field */
  value = input<number>(0);

  valueChange = output<number>();

  /** we need variants one for entering currency input such as dollor, another for number of people.*/
  variant = input<'currency' | 'people'>('currency');

  validateCurrencyInput = (input: HTMLInputElement): void => {
    input.value = input.value.match(/^\d*\.?\d{0,2}/)?.[0] || '';
    if (input.scrollWidth > input.clientWidth) {
      input.value = input.value.slice(0, -1);
    }
    const numericValue = Number(input.value);
    if (!isNaN(numericValue)) {
      this.valueChange.emit(numericValue);
    } else {
      this.valueChange.emit(0);
    }
  };

  validatePeopleInput = (input: HTMLInputElement): void => {
    input.value = input.value.match(/^\d*\.?\d{0,2}/)?.[0] || '';
    if (input.scrollWidth > input.clientWidth) {
      input.value = input.value.slice(0, -1);
    }
    const numericValue = Number(input.value);
    if (!isNaN(numericValue)) {
      this.valueChange.emit(numericValue);
    } else {
      this.valueChange.emit(0);
    }
  };

  limitInputByWidth(input: HTMLInputElement) {
    if (this.variant() === 'currency') {
      this.validateCurrencyInput(input);
    } else {
      this.validatePeopleInput(input);
    }

    //Tell the form that input has been touched as well as changes the value
    this.onTouched();
    this.onChange(this.value());
  }

  inputIcon() {
    //depending on the variant return the icon
    if (this.variant() === 'currency') {
      return '/assets/dollar.svg';
    } else {
      return '/assets/person.svg';
    }
  }

  //We are also making input compinent a form compiment one
  onChange: any = () => {};
  onTouched: any = () => {};

  //Also get a viewChild reference to the input field so we can set the value of the input field when the value changes.
  inputField = viewChild<ElementRef<HTMLInputElement>>('tipInput');

  writeValue(value: any): void {
    if (this.inputField()) {
      this.inputField()!.nativeElement.value = value.toString();
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
