import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  id: number;
  recipe: Recipe;
  badId: boolean;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);

    if (isNaN(this.id)) {
      this.badId = true; 
    } else {

      this.recipeService.getRecipeById(this.id).subscribe(
        (result: Recipe) => {
          this.recipe = result;
          console.info(result);
      });
    }
  }

}
