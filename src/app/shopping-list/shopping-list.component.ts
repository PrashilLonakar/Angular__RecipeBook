import { Ingredients } from './../shared/model/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] =[
    new Ingredients('Apples', 5),
    new Ingredients('Oranges',  12),
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded( ingredient :Ingredients){
      this.ingredients.push(ingredient);
  }

}
