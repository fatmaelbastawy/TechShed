import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Products/services/Product.service';
import { Cartservice } from 'src/app/Cart/services/cart.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-Product-details',
  templateUrl: './Product-details.component.html',
  styleUrls: ['./Product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('exampleModal') exampleModal: any;
  id: any;
  prod: any = {};
  cartItemsCount: number = 0;
  cartItemsCountUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private cartService: Cartservice
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.getProduct();
    this.cartItemsCount = this.getCartItemsCount();
  }

  getProduct() {
    this.service.getProductById(this.id).subscribe(
      (res) => {
        this.prod = res;
      },
      (error) => {
        alert('error');
      }
    );
  }

  openModal() {
    this.exampleModal.show();
    console.log('error');
  }

  selectedQuantity: number = 0;
  selectQuantity(event: any){
    this.selectedQuantity = Number(event.target.value);
  }


  addToCart(item: any, quantity: number): void {
    const storedItems = localStorage.getItem('cartItems');

    if (storedItems) {
      const cartItems = JSON.parse(storedItems);
      const existingItem = cartItems.find((cartItem: any) => cartItem.id === item.id);

      if (existingItem) {
        alert("This Product is already in your cart");
        return;
      }
    }

    this.cartService.addToCart(item, quantity);
    this.cartItemsCount = this.cartService.getCartItems().length;

    item.isAddedToCart = true; // Add a property to the item to track its added status
    console.log(item.id);
    console.log(quantity);
  }

  getCartItemsCount(): number {
    return this.cartService.getCartItems().length;
  }
}
