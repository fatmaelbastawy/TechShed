import { EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cartservice implements OnInit {
  cartItemsUpdated: EventEmitter<number> = new EventEmitter<number>();
  cartItemsCount:number=0;
  public totalPrice: number = 0;
ngOnInit(): void {
  this.cartItemsUpdated.subscribe((cartItemsCount) => {
    this.cartItemsCount = cartItemsCount;
  });
}
  public cartItems: any[] = [];

constructor() {

  this.loadCartItemsFromLocalStorage();
}


public saveCartItemsToLocalStorage(): void {

  localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
}

private loadCartItemsFromLocalStorage(): void {
  const storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    this.cartItems = JSON.parse(storedCartItems);
  }
}

addToCart(item: any,quantity:number): void {

  for (let i = 0; i < quantity; i++) {
  
    this.cartItems.push(item);
  }
  this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  this.cartItemsUpdated.emit(this.cartItems.length);

  this.saveCartItemsToLocalStorage();
}


removeFromCart(item: any): void {
  const index = this.cartItems.indexOf(item);
  if (index !== -1) {
    this.cartItems.splice(index, 1);
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.saveCartItemsToLocalStorage();
  }
}


getCartItems(): any[] {
  return this.cartItems;

}



getTotalPrice(): number {
  return this.totalPrice;
}

}
