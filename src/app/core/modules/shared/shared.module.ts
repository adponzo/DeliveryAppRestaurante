import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ValidationContainerComponent } from '../../components/validation-container/validation-container.component';
import { DateCrossValidationDirective } from './../../directives/date-cross-validation.directive';
import { MinValueValidationDirective } from '../../directives/min-value-validation.directive';

@NgModule({
  declarations: [
    ValidationContainerComponent,
    DateCrossValidationDirective,
    MinValueValidationDirective
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ValidationContainerComponent,
    MinValueValidationDirective,
    DateCrossValidationDirective
  ]
})
export class SharedModule { }
