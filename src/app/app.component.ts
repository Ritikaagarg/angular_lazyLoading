import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondProject';
  public elements = Array(25);
  count = 1;
  flag: boolean=false;

  @HostListener("window:scroll", [])
  onScroll(): void{
    if(this.bottomReached()){
      setTimeout(function(){
        this.flag = true;
      },10000);
      this.elements = [...this.elements, this.count++];
      //this.flag= false;
      console.log(this.count);
    }
  }

  bottomReached(): boolean{
    return (window.innerHeight + window.scrollY)>= document.body.offsetHeight;
  }
}
