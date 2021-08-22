import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Tomato",2),
    new Ingredient("Apple",5),
  ]
  constructor() { }

  ngOnInit(): void {
  }

onIngredientAdded(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
  }
}
