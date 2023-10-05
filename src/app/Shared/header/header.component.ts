import { Component, OnInit } from '@angular/core';
import { Cartservice } from 'src/app/Cart/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
