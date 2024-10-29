import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ItemService {
	Items = [{
		id: 1,
		name: 'Téléphone',
		price: 1000,
		show: true,
		type: 'Electronics',
	}, {
		id: 2,
		name: 'Laptop',
		price: 1500,
		show: true,
		type: 'Electronics'
	}, {
		id: 3,
		name: 'Tablet',
		price: 600,
		show: true,
		type: 'Electronics'
	}, {
		id: 4,
		name: 'Headphones',
		price: 200,
		show: true,
		type: 'Electronics'
	}, {
		id: 5,
		name: 'Smartwatch',
		price: 300,
		show: true,
		type: 'Electronics'
	}, {
		id: 6,
		name: 'Camera',
		price: 1200,
		show: true,
		type: 'Electronics'
	}, {
		id: 7,
		name: 'Printer',
		price: 250,
		show: true,
		type: 'Electronics'
	}, {
		id: 8,
		name: 'Monitor',
		price: 400,
		show: true,
		type: 'Electronics'
	}, {
		id: 9,
		name: 'Keyboard',
		price: 100,
		show: true,
		type: 'Electronics'
	}, {
		id: 10,
		name: 'Mouse',
		price: 50,
		show: true,
		type: 'Electronics'
	},
	{
		id: 11,
		name: 'T-shirt',
		price: 20,
		show: true,
		type: 'Clothes'
	}]

	filteredItems = this.Items;


	handleHideItem(item: any) {
		this.Items.map(i => {
			if (i.id === item.id) {
				i.show = !i.show;
			}
		});
	}


	filterItem(type: any) {
		this.filteredItems = this.Items.filter(item => item.type === type);
	}

	constructor() { }
}
