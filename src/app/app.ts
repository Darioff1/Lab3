import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';


@Component({
  selector: 'root-directive',
  imports: [RouterOutlet,ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count :number=0;
  hide:boolean=false;<!-- start the variables

  onButtonClick(){
    
    this.count++;
  }
  onDoubleClick(){
    if(this.hide=== false){<!--loop for double click >
      this.hide = true;
    }else{
    this.hide =false;
    }
  }
  
}
