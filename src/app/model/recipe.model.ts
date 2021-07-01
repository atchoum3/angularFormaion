import { RecipeIngredient } from "./recipe-ingredient.model";

export class Recipe {
    id?: number;
    name: string;
    picture: string;
    description: string;
    ingredients: RecipeIngredient[];
    instructions: string[];
}