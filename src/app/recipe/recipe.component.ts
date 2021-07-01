import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Output()
  recipeDelete = new EventEmitter<number>();

  bool: boolean;
  textButton = 'see more';

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  toggleExpand(): void{
    this.bool = !this.bool;
    this.bool ? this.textButton = 'see less' : this.textButton = 'see more';
  }

  delete(): void {
    let id = this.recipe.id!;
    this.recipeService.deleteRecipe(id);
    this.recipeDelete.emit(id);
  }

}