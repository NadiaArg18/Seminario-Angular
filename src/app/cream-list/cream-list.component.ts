import { Component, OnInit } from '@angular/core';
import { CreamCartService } from '../cream-cart.service';
import { CreamDataService } from '../cream-data.service';
import { Cream } from './Cream';

@Component({
  selector: 'app-cream-list',
  templateUrl: './cream-list.component.html',
  styleUrls: ['./cream-list.component.scss']
})
export class CreamListComponent implements OnInit {

  creams: Cream[] = [];

  constructor(
    private cart: CreamCartService,
    private creamsDataService: CreamDataService) {
  }

  ngOnInit(): void {
    this.creamsDataService.getAll()
    .subscribe(creams => this.creams = creams);
  }

  addToCart(cream: Cream): void {
    this.cart.addToCart(cream);
    cream.stock -= cream.quantity;
    cream.quantity = 0;
  }
  maxReached(m: string) {
    alert(m);
  }

}
