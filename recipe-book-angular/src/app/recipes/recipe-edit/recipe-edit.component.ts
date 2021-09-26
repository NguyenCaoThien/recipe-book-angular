import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editRecipeForm: FormGroup
  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }
  isEdit = false;

  ngOnInit(): void {
  this.route.params.subscribe((param: ParamMap)=>{
    this.id = +param["id"];
    this.isEdit = param["id"] != null;
    console.log(this.isEdit);    

    this.onInitForm();
  })
  }

  get ingredients(){
    return this.editRecipeForm.get('ingredients') as FormArray;
  }

  onInitForm(){
    let recipeName: string = "";
    let recipeImgPath: string = "";
    let recipeDescription: string = "";
    let ingredients = new FormArray([]);

    if(this.isEdit){
      let recipes = this.recipeService.getRecipeByIndex(this.id);    
      recipeName = recipes.name;
      recipeImgPath = recipes.imgPath;
      recipeDescription = recipes.description;
  
      if(recipes["ingredients"]){
        recipes.ingredients.forEach(ingre => {
          ingredients.push(new FormGroup({
            "name": new FormControl(ingre.name),
            "amount": new FormControl(ingre.amount)
          }))
        });
      }  
    }

    this.editRecipeForm = new FormGroup({
      "name": new FormControl(recipeName),
      "imgPath": new FormControl(recipeImgPath),
      "ingredients":ingredients,
      "description": new FormControl(recipeDescription)
    });   

    console.log(this.editRecipeForm)
  }

  onAddIngredient(){ 
   this.ingredients.push(new FormGroup({
   "name":  new FormControl(null),
   "amount": new FormControl(null)
   }))
  }

  onDeleteIngredient(index: number){
    this.ingredients.removeAt(index);
  }

  onSubmit(){
    if(this.isEdit){
      this.recipeService.updateRecipe(this.editRecipeForm.value, this.id)
    }
    else{
      this.recipeService.addNewRecipe(this.editRecipeForm.value);
      //this.isEdit = false;
    }
    this.router.navigate(["../"], {relativeTo: this.route})
  }
}
