import {Ingredient} from '../shared/ingredient.model';
export class Recipe
{
	public name:string;
	public desc:string;
	public imagePath:string;
	public ingredient:Ingredient[]=[];
	constructor(name:string,desc:string,imagepath:string,ingredient:Ingredient[]){
		this.name=name;
		this.desc=desc;
		this.imagePath=imagepath;
		this.ingredient=ingredient;
	}
}