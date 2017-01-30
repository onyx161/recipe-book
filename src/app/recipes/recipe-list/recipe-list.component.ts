import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Very tasty',
      'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      []),
    new Recipe(
      'Summer Salad',
      'Okayish',
      'http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--46004_11.jpg',
      [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
