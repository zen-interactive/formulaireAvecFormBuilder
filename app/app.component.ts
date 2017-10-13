import { Component } from '@angular/core';
import {BasketComponent} from './basket.component';

@Component({
	selector: 'basket-test',
	template: '<basket></basket>',
	directives: [BasketComponent]
})
export class AppComponent { }