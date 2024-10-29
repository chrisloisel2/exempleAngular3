import { Injectable } from '@angular/core';
import { ItemService } from './item.service';

@Injectable({
	providedIn: 'root'
})
export class PanierService {
	public items: ItemService

	constructor(items: ItemService) {
		this.items = items;
	}

	panier: any = {};

	addToPanier(item: any) {
		if (this.panier[item.id]) {
			this.panier[item.id].quantity++;
		}
		else {
			this.panier[item.id] = { ...item, quantity: 1 };
		}
	}

	removeFromPanier(item: any) {
		if (this.panier[item.id].quantity > 1) {
			this.panier[item.id].quantity--;
		} else {
			delete this.panier[item.id];
		}
	}


}
