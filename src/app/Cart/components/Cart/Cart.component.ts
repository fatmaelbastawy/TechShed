import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../../services/cart.service';
@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {


constructor(public cartService: Cartservice) {}

  item: any;

  ngOnInit() {



  }

  deletePro(item: any): void {
    const index = this.cartService.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartService.cartItems.splice(index, 1);
    }
    console.log("del")
  }

  }





