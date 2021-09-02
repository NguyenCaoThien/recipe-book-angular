import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Tomato", 2),
    new Ingredient("Apple", 5),
  ]

  addedIngredient = new EventEmitter<Ingredient>();

  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }

  addRecipeToShoppingList(ingres: Ingredient[]){
    this.ingredients.push(...ingres);
  }
}
