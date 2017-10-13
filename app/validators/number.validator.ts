import { Control } from '@angular/common';

interface ValidationResult { [key: string]: boolean; }

export class NumberValidator {
 
	static isInteger(control: Control): ValidationResult { 

		if (Number.isInteger(Number(control.value))) {
			return null;
		}

		return { "isInteger": true };

	}

	static isNumber(control: Control): ValidationResult { 

		if (Number.isNaN(Number(control.value))) {
			return { "isNumber": true };
		}

		return null;

	}

}