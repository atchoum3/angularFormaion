import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      (result: Recipe[]) => {
        this.recipes = result;
      },
      (error) =>  {
        //traiter l'erreur
      }
    )
  }

  recipeDelete(id: number) {
    this.recipes = this.recipes.filter(recipe => recipe.id != id);
  }

}
