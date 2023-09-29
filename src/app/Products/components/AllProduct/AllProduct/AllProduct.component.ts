import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { ProductService } from 'src/app/Products/services/Product.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-AllProduct',
  templateUrl: './AllProduct.component.html',
  styleUrls: ['./AllProduct.component.css']
})
export class AllProductComponent implements OnInit {  @ViewChild('sliderEl') sliderEl!: ElementRef<HTMLInputElement>;

 constructor(private service:ProductService) { }

sliderValue: number = 0;
showCards:boolean=false;
 selectedItem: string="";
// Products:any[]=[];

ngOnInit() {


  this.getAllPros();
  this.getAllCats();
  this.getProductByCat(this.selectedItem);


}

// ngAfterViewInit() {
//   this.sliderEl.nativeElement.addEventListener('input', (event: Event) => {
//     const tempSliderValue: number = parseInt((event.target as HTMLInputElement).value);

//     this.sliderValue = tempSliderValue;
//     let value=document.getElementById("value") as HTMLDivElement;
//     value.textContent=String(tempSliderValue);
//     console.log(value);

//     const progress = (this.sliderValue /parseInt (this.sliderEl.nativeElement.max)) * 100;

//     this.sliderEl.nativeElement.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
//   });
// }



isTogglevisible:boolean=true;

isTogglePvisible:boolean=true;



  //#region //add active for lis in filterbycat//



selectItem(item: string) {
  this.selectedItem = item;
  const All=document.getElementById("all");
  All?.classList.remove('active')

}
  //#endregion


  showToggle(): void {
    this.isTogglevisible = !this.isTogglevisible;
  }
  showToggleP(): void {
    this.isTogglePvisible = !this.isTogglePvisible;
  }

Products:any[]=[];
Categories:any[]=[];
selectedOption:string="Sort by"


  getAllPros(){
    this.service.getAllProducts().subscribe(res=>{
    this.Products=res as any[];
    console.log(res)})

  }

  getAllCats(){
    this.service.getAllCategories().subscribe(res=>{
    this.Categories=res as any[];
    console.log(res)})

  }

 filtercat(event:any){
  let value=event.target.textContent;

this.getProductByCat(value);




 }

 getProductByCat(catName:string){
  this.service.getProductByCategory(catName).subscribe(res=>{
    this.Products=res as any[];

  })
 }

 Addactive(event:any){
  const All=document.getElementById("all");
  All?.classList.add('active');

  let value=event.target.textContent;
  if(value=="All"){
    this.getAllPros() ;


 }
 }


 filterProducts(selectedOption:string):void{

  console.log("jh");

  if (selectedOption === "Price(low to high)") {

    this.Products = this.Products.sort((a, b) => a.price - b.price);
  }


  else if (selectedOption === "Price(high to low)") {

    this.Products = this.Products.sort((a, b) => b.price - a.price);
  }


  else if (selectedOption === "Name(A-Z)") {

    this.Products = this.Products.sort((a, b) => a.title.localeCompare(b.title));
  }


  else if (selectedOption === "Name(Z-A)") {

    this.Products = this.Products.sort((a, b) => b.title.localeCompare(a.title));
  }



}


clearFilter() {
  window.location.reload();
}


}





