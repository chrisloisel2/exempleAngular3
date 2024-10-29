import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemService } from '../../Service/item.service';
import { PanierService } from '../../Service/panier.service';

@Component({
	selector: 'app-item-card',
	standalone: true,
	imports: [],
	templateUrl: './item-card.component.html',
	styleUrl: './item-card.component.css'
})
export class ItemCardComponent {

	constructor(
		public items: ItemService,
		public panier: PanierService
	) {
		console.log(this.items);
	}

	@Input()
	item: any;
}
