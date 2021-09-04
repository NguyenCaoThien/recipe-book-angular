import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../common/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  igChangeSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { 
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnInit(): void {
    this.igChangeSub =  this.shoppingListService.addedIngredient.subscribe((ingredient: Ingredient)=>{
      this.ingredients.push(ingredient);
    });
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }
}
