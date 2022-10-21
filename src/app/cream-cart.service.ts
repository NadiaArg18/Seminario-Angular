import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cream } from './cream-list/Cream';

//Maneja lógica del carrito.
@Injectable({
  providedIn: 'root'
})
export class CreamCartService {

  private _cartList: Cream[] = []; 
  
  cartList: BehaviorSubject<Cream[]> = new BehaviorSubject(this._cartList);

 constructor() { }

  addToCart(cream: Cream): void{
    let Cream = this._cartList.find((v1) => v1.name == cream.name);
    if (!Cream){
      this._cartList.push({ ... cream});
    } else {
      Cream.quantity += cream.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList); //equivalente al emitt de eventos.
  }
}