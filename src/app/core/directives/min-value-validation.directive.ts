import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMinValueValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValueValidationDirective, multi: true}]
})
export class MinValueValidationDirective implements Validator {

  @Input('appMinValueValidation')
  minValue: number;

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    return this.minValueValidation(control);
  }

  minValueValidation(control: AbstractControl) {
    if (control.value != null && (this.minValue > control.value)) {
      return { minValue: this.minValue};
    }

    return null;
  }
}

