import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe'
import { RecipeItemComponent } from './recipe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://trempel.ucoz.ua/t_2-1-.jpg')

  constructor() { }

  ngOnInit() {
  }

}
