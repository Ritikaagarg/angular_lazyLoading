import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondProject';
  public elements = Array(25);
  count :number= 1;
  flag: boolean=false;

  @HostListener("window:scroll", ['$event'])
  onScroll(): void{
    if((window.innerHeight + window.scrollY)>= document.body.offsetHeight){

      setTimeout(()=>{
        this.flag = true;
        this.elements = [...this.elements, this.count++];
        
      },1000);
      
      console.log(this.count);
    }
  }
}
