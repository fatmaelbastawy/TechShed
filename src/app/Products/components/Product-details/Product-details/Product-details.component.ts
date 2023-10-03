import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Products/services/Product.service';
import { Cartservice } from 'src/app/Cart/services/cart.service';

@Component({
  selector: 'app-Product-details',
  templateUrl: './Product-details.component.html',
  styleUrls: ['./Product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
@ViewChild('exampleModal') exampleModal: any;
id:any;
prod:any={};
  constructor(private route:ActivatedRoute,private service:ProductService,private cartService: Cartservice) {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }

  ngOnInit() {
    this.getProduct()
  }
getProduct(){
  this.service.getProductById(this.id).subscribe(res =>{
    this.prod=res;
  },
  error=>  {
    alert("error");
  })
}
openModal(){
  this.exampleModal.show();
  console.log("error");
}

addToCart(item: any): void {
  this.cartService.addToCart(item);

console.log(item.id);
}
}
