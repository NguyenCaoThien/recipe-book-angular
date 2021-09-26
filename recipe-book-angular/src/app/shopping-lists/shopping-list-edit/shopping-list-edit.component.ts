import { Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/common/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService) { }
  @ViewChild("f") ingreForm: NgForm;
  subscription: Subscription;
  isEdit: boolean = false;
  ingreEditedIndex : number;

  ngOnInit(): void {
      this.subscription = this.shoppingListService.startedEditing.subscribe((index)=>{

      let ingre = this.shoppingListService.getIngredientsByIndex(index);
      this.isEdit = true;
      this.ingreEditedIndex = index;
      this.ingreForm.form.patchValue({
        name: ingre.name,
        amount: ingre.amount
      });
    })
  }  

  onAddIngredient(): void{
    console.log(this.ingreForm)
    const ingreName = this.ingreForm.value.name;
    const ingreAmount = this.ingreForm.value.amount;
    let ingre = new Ingredient(ingreName, ingreAmount);
   if(this.isEdit){
     this.shoppingListService.updateIngredient(this.ingreEditedIndex, ingre);
   }
   else{
    this.shoppingListService.addIngredient(ingre);
   }

   this.isEdit = false;
   this.ingreForm.reset();
  }

  onClearIngredient(){
    // TODO: clear ingredient
  }

  onDeleteIngre(){
    this.shoppingListService.deleteIngredient(this.ingreEditedIndex);
    this.ingreForm.reset();
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
