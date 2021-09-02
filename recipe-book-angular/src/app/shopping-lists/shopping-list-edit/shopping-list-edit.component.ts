import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/common/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }
  @ViewChild("inputIngredientName") ingredientName: ElementRef;
  @ViewChild("inputIngredientAmount") ingredientAmount: ElementRef;

  ngOnInit(): void {
  }  

  onAddIngredient(): void{
    const ingreName = this.ingredientName.nativeElement.value;
    const ingreAmount = this.ingredientAmount.nativeElement.value;
    //this.ingredient.emit(new Ingredient(ingreName, ingreAmount));
    this.shoppingListService.addedIngredient.emit(new Ingredient(ingreName, ingreAmount));
  }
}
