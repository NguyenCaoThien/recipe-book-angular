import { Ingredient } from "../common/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imgPath: string;
    public ingredients: Ingredient[];

    public constructor(name: string, des: string, imgPath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = des;
        this.imgPath = imgPath;
        this.ingredients = ingredients;
    }
}