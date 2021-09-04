import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../common/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Tomato", 2),
    new Ingredient("Apple", 5),
  ]

  addedIngredient = new Subject<Ingredient>();

  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }

  addRecipeToShoppingList(ingres: Ingredient[]){
    this.ingredients.push(...ingres);
  }
}
