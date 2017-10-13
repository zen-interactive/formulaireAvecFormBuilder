import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'euros'})
export class EuroPipe implements PipeTransform {
  transform(value: number): string {
	return value + ' €';
  }
}