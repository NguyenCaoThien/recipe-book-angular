import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';
import { ShoppingListService } from '../shopping-lists/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Sweet soup", "Sweet soup description", "https://d9aim9fbtsqsm.cloudfront.net/wp-content/uploads/2017/09/maxresdefault-2.jpg",
    [new Ingredient("Banana", 5), 
    new Ingredient("Tobokki", 3)]
    ), 
    new Recipe("Pancake", "Pancake description", "https://nghebep.com/wp-content/uploads/2020/10/banh-xeo.jpg",
    [new Ingredient("Shrimp", 10),
    new Ingredient("Flour", 20)]
    )  
  ]

  selectedRecipeItem = new EventEmitter<Recipe>();
  constructor(private slService: ShoppingListService) { }

  getRecipe(){
    return this.recipes.slice();
  }

  addRecipeToShoppingList(recipe: Recipe){
    this.slService.addRecipeToShoppingList(recipe.ingredients);
  }
}
