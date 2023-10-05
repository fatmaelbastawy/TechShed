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

    this.cartService.removeFromCart(item);
    console.log("deleted");

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







