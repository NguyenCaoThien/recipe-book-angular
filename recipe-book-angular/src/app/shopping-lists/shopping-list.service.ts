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
  updatedIngredients = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredientsByIndex(index: number){
    return this.ingredients.slice()[index];
  }

  addRecipeToShoppingList(ingres: Ingredient[]){
    this.ingredients.push(...ingres);
  }

  updateIngredient(index: number, ingre: Ingredient){
    this.ingredients[index] = ingre;
    this.updatedIngredients.next(this.getIngredients());
  }

  addIngredient(ingre: Ingredient){
    this.ingredients.push(ingre);
    this.updatedIngredients.next(this.getIngredients())
  }

  deleteIngredient(index: number){   
    this.ingredients.splice(index, 1);
    this.updatedIngredients.next(this.getIngredients());
  }
}
