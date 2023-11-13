import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient) { }


getAllProducts(){

  return this.http.get("https://fakestoreapi.com/products");
}

getAllCategories(){

  return this.http.get("https://fakestoreapi.com/products/categories");
}

getProductByCategory(catName:string){
  return this.http.get("https://fakestoreapi.com/products/category/"+ catName)
}

getProductById(id:any){

  return this.http.get("https://fakestoreapi.com/products/"+ id);
}

addToCart(id:number,quantity:number){
  return this.getProductById(id);

}
}
