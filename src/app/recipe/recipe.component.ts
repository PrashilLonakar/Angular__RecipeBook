import { Component, OnInit } from '@angular/core';
import { Recipe } from './../shared/model/recipe.model'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  selectedRecipe : Recipe;
  constructor() { }

  ngOnInit() {
  }

}
