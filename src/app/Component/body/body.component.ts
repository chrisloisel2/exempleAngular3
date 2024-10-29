import { Component, OnInit } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { PanierComponent } from '../panier/panier.component';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../Service/item.service';
import { PanierService } from '../../Service/panier.service';

@Component({
	selector: 'app-body',
	standalone: true,
	imports: [ItemCardComponent, PanierComponent, CommonModule],
	templateUrl: './body.component.html',
	styleUrl: './body.component.css'
})
export class BodyComponent {

	constructor(
		public items: ItemService,
		public panier: PanierService
	) {
		console.log(this.items);
	}

	get panierItems() {
		return Object.values(this.panier.panier);
	}


}
