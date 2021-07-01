import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private serverUrl = 'http://10.0.1.153:8080/api';
  private recipeUrl = this.serverUrl + '/v1/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getRecipeById(id: number): Observable<Recipe>{
    return this.http.get<Recipe>(this.recipeUrl + "/" + id);
  }

  addRecipe(recipe: Recipe):Observable<Number> {
    return this.http.post<number>(this.recipeUrl, recipe);
  }

  deleteRecipe(id: number): void {
    this.http.delete<number>(this.recipeUrl + "/" + id).subscribe();
  }
}
