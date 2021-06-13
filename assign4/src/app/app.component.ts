import { Component } from '@angular/core';
import { NgForm,Validator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {






onsubmit(form:NgForm){
  console.log('Submited');
  
}
}