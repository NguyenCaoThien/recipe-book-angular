import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      this.id = +param.get("id");
      this.recipe = this.recipeService.getRecipeByIndex(this.id);
    })
  }

  onAddRecipeToShoppingList(){
    this.recipeService.addRecipeToShoppingList(this.recipe);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
