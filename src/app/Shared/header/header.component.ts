import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cartservice } from 'src/app/Cart/services/cart.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItemsCount: number = 0;


  constructor(private cartService: Cartservice, private router: Router) {}

  ngOnInit() {

}


  goToCart(): void {
    this.router.navigate(['/cart']);
  }

  getCartItemsCount(): number {
    return this.cartService.getCartItems().length;

  }
}
