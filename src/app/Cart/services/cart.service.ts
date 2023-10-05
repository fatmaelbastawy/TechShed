import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {


  public cartItems: any[] = [];
constructor() {

  this.loadCartItemsFromLocalStorage();
}


private saveCartItemsToLocalStorage(): void {
  localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
}

private loadCartItemsFromLocalStorage(): void {
  const storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    this.cartItems = JSON.parse(storedCartItems);
  }
}

addToCart(item: any): void {
  this.cartItems.push(item);
  this.saveCartItemsToLocalStorage();
}


removeFromCart(item: any): void {
  const index = this.cartItems.indexOf(item);
  if (index !== -1) {
    this.cartItems.splice(index, 1);
    this.saveCartItemsToLocalStorage();
  }
}


getCartItems(): any[] {
  return this.cartItems;
}





}
