import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Sweet soup", "Sweet soup description", "https://d9aim9fbtsqsm.cloudfront.net/wp-content/uploads/2017/09/maxresdefault-2.jpg"), 
    new Recipe("Pancake", "Pancake description", "https://d9aim9fbtsqsm.cloudfront.net/wp-content/uploads/2017/09/maxresdefault-2.jpg")  
  ]
  constructor() { }

  getRecipe(){
    return this.recipes.slice();
  }
}
