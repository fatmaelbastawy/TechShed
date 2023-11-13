import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../../services/cart.service';
import { IProduct } from 'src/app/Products/Models/iproduct';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {


constructor(public cartService: Cartservice) {}

  item!: IProduct;
  cartItemsCount=0;
  cartItems: IProduct[] = [];

  ngOnInit() {

    this.cartItems = this.cartService.cartItems;
    this.cartService.cartItemsUpdated.subscribe((cartItemsCount) => {
      this.cartItemsCount = cartItemsCount;
    });}


    deletePro(item: any): void {
      this.cartService.removeFromCart(item);
      console.log("deleted");

      if (this.cartService.cartItems.length < 1) {
        const emptyMessage = document.createElement("div");
        emptyMessage.style.textAlign = "center";
        emptyMessage.style.marginTop = "50vh";

        const link = document.createElement("a");
        link.innerText = "Continue Browsing";
        link.href = "AllProducts";

        emptyMessage.appendChild(link);

        const container = document.querySelector(".container-fluid");
        container!.innerHTML = "";

        container!.appendChild(emptyMessage);
      }
    }


  updateQuantity(item: IProduct, event: any) {
    const quantity = event.target.value;

    // التحقق مما إذا كان المنتج موجودًا في سلة الشراء
    const existingItem = this.cartService.cartItems.find((cartItem: any) => cartItem.id === item.id);

    if (existingItem) {
      // تحديث الكمية المحددة للمنتج
      existingItem.quantity = quantity;
    } else {
      // إضافة المنتج إلى سلة الشراء بالكمية المحددة
      item.quantity = quantity;
      this.cartService.cartItems.push(item);
    }

    // حفظ تغييرات سلة الشراء في localStorage
    this.cartService.saveCartItemsToLocalStorage();
  }
trackById(index: number, item: IProduct): number {
  return item.id;
}

calculateTotalPrice(): number {
  return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

  }







