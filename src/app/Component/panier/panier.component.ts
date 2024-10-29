import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ItemService } from '../../Service/item.service';
import { PanierService } from '../../Service/panier.service';

@Component({
	selector: 'app-panier',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './panier.component.html',
	styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit, OnChanges {


	constructor(
		public items: ItemService,
		public paniers: PanierService
	) { }

	total = 0;

	ngOnChanges(changes: SimpleChanges) {
		console.log('Composant PanierComponent Hook ONCHANGES', changes);
	}

	ngOnInit() {
		console.log('Composant PanierComponent Hook ONINIT', this.panier);
	}


	@Input() panier: any[] = [];
}
