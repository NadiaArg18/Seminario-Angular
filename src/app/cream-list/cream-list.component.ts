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

  creams: Cream[] = [/*{
    name: 'NEUTROGENA',
    type: 'Hidratación profunda',
    price: 300,
    stock: 18,
    image: 'assets/img/neutrogena.jpeg',
    clearance: false,
    quantity: 0,
  },
  {
    name: 'RITUALS',
    type: 'Aroma frutal',
    price: 450,
    stock: 10,
    image: 'assets/img/Cerave.jpg',
    clearance: true,
    quantity: 0,
  },
  {
    name: 'Lubriderm',
    type: 'Reparación intensiva',
    price: 250,
    stock: 0,
    image: 'assets/img/Lubriderm.jpg',
    clearance: false,
    quantity: 0,
  },
  {
    name: 'Nutritiva',
    type: 'Cereza y Avellana',
    price: 700,
    stock: 3,
    image: 'assets/img/Cerave.jpg',
    clearance: false,
    quantity: 0,
  },*/
];

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
