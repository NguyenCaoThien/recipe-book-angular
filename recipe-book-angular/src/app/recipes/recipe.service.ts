import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../common/ingredient.model';
import { ShoppingListService } from '../shopping-lists/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
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

  recipeChanged= new Subject<Recipe[]>();
  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number){
    return this.recipes.slice()[index];
  }

  addRecipeToShoppingList(recipe: Recipe){
    this.slService.addRecipeToShoppingList(recipe.ingredients);
  }

  updateRecipe(recipe: Recipe, index: number){
    this.recipes[index]= new Recipe(recipe.name, recipe.description, recipe.imgPath, recipe.ingredients);
    this.recipeChanged.next(this.recipes.slice());
  }

  addNewRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.getRecipes())
  }
}
