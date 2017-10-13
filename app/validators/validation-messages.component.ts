import { Component, Input }  from '@angular/core';
import { Control }           from '@angular/common';

@Component({
  selector: 'validation-messages',
  template: `
    <div *ngIf="control.dirty && !control.valid">
      <small class="text-danger" *ngIf="control.hasError('required')">La valeur est obligatoire</small>
      <small class="text-danger" *ngIf="control.hasError('isNumber')">La valeur doit être un nombre</small>
      <small class="text-danger" *ngIf="control.hasError('isInteger')">La valeur doit être un nombre entier</small>
    </div>  
  `
})
export class ValidationMessages {
  @Input() control: Control;
}