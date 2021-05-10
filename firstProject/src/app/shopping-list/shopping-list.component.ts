import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../share/Ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',

  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit {
  Ingredient: Ingredients[]=[
    new Ingredients{'mango',5},
    new Ingredients{'orange',10},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
