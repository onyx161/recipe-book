import { Injectable } from '@angular/core';

import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
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

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
