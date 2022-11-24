import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreamCartService } from '../cream-cart.service';
import { Cream } from '../cream-list/Cream';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Cream[]>;

  constructor(cart: CreamCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }
   
}