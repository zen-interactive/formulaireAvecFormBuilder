import {Component}   from '@angular/core';
import {Article}     from './article'; 
import {EuroPipe}    from './pipes/euro.pipe';
import {NumberValidator}   from './validators/number.validator';
import {ValidationMessages}   from './validators/validation-messages.component';
import {
  FormBuilder,
  ControlGroup,
  Control,
  Validators
} from '@angular/common';

@Component({
  selector: 'basket',
  templateUrl: 'app/basket.html',
  pipes: [EuroPipe],
  directives: [ValidationMessages]
})
export class BasketComponent {

  private panier: Array<Article> = [
    new Article('cahier', 2, 5.3),
    new Article('crayon', 4, 1.1),
    new Article('gomme', 1, 3.25)
  ];
  private total: number;
  private form: ControlGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit() { this.createForm(); }

  createForm() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.compose([Validators.required, NumberValidator.isInteger])],
      price: ['', Validators.compose([Validators.required, NumberValidator.isNumber])],
    });
    this.updateTotal();    
  }

  editArticle(index: number) { 
    (<Control>this.form.find('name')).updateValue(this.panier[index].name);
    (<Control>this.form.find('quantity')).updateValue(this.panier[index].quantity);
    (<Control>this.form.find('price')).updateValue(this.panier[index].price);
    this.panier.splice(index, 1);
    this.updateTotal();
  }

  deleteArticle(index: number) {
    this.panier.splice(index, 1);
    this.updateTotal();
  }

  addArticle() {
    this.panier.push(new Article(
      this.form.value.name, 
      Number(this.form.value.quantity), 
      Number(this.form.value.price)
    ));
    for(let key in this.form.controls) {
      let control = <Control>this.form.find(key);
      control.updateValue('');
      control.updateValueAndValidity();
    }
    this.updateTotal();
  }

  updateTotal() {
    this.total = 0;
    for(let element of this.panier) {
      this.total += element.price * element.quantity;
    }
  }

}