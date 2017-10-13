export class Article {

	private _name: string;
	private _quantity: number;
	private _price: number;

	constructor(name: string = '', quantity: number = 0, price: number = 0) {
		this._name = name;
		this._quantity = quantity;
		this._price = price;
	}

	get name(): string { return this._name; }
	set name(name: string) { this._name = name; }
	get quantity(): number { return this._quantity; }
	set quantity(quantity: number) { this._quantity = quantity; }
	get price(): number { return this._price; }
	set price(price: number) { this._price = price; }
}