import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Sweet soup", "Sweet soup description", "https://d9aim9fbtsqsm.cloudfront.net/wp-content/uploads/2017/09/maxresdefault-2.jpg"), 
    new Recipe("Pancake", "Pancake description", "https://d9aim9fbtsqsm.cloudfront.net/wp-content/uploads/2017/09/maxresdefault-2.jpg")  
  ]
  constructor() { }
  recipe: Recipe;
  @Output() selectedRecipeItem = new EventEmitter<Recipe>()
  ngOnInit(): void {
  }

  onSelectedRecipeItem(item: Recipe): void{
    this.selectedRecipeItem.emit(item);
  }
}
