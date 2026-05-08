import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TipInput } from '../tip-input/tip-input';

@Component({
  selector: 'app-tip-form',
  imports: [TipInput,ReactiveFormsModule],
  templateUrl: './tip-form.html',
  styleUrl: './tip-form.css',
})
export class TipForm {
  private fb = inject(FormBuilder);
  inputForm = this.fb.group({
    tipAmount: [0],
    persons: [10],
  });
  submitForm() {
    if (this.inputForm.valid) {
      const tipAmount = this.inputForm.value.tipAmount;
      console.log('Tip Amount:', tipAmount);
    } else {
      console.log('Form is invalid');
    }
  }
}
