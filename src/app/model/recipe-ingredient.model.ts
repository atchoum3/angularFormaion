import { Ingredient } from './ingredient.model';

export class RecipeIngredient {
    id?: number;
    ingredient: Ingredient;
    quantity: number;
    unit: string;
}