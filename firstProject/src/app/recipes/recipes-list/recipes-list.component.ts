import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';




@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})


export class RecipesListComponent implements OnInit {

recipes:Recipe[]=[
  new Recipe(' A Test Recipes', 'this is simply a test','https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/paneer-butter-masala.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
