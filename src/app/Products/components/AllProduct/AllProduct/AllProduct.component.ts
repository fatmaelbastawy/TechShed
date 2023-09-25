import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-AllProduct',
  templateUrl: './AllProduct.component.html',
  styleUrls: ['./AllProduct.component.css']
})
export class AllProductComponent implements OnInit {  @ViewChild('sliderEl') sliderEl!: ElementRef<HTMLInputElement>;
sliderValue: number = 0;

ngOnInit() {
  this.addActive();
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
  constructor() { }


  //#region //add active for lis in filterbycat//
  addActive(): void {
    const list = document.getElementsByClassName("option") as HTMLCollectionOf<Element>;
    Array.from(list).forEach((element: Element) => {
      element.addEventListener("click", () => {

        Array.from(list).forEach((el: Element) => {
          el.classList.remove("active");
        });

        element.classList.add("active");
      });
    });
  }
  //#endregion


  showToggle(): void {
    this.isTogglevisible = !this.isTogglevisible;
  }
  showToggleP(): void {
    this.isTogglePvisible = !this.isTogglePvisible;
  }
}

