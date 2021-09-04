import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
  recipe: Recipe;
  @Input() index: number;

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipeByIndex(+this.index);
  }

}
