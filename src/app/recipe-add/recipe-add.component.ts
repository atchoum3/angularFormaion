import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router'
import { FormArray, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  recipeForm = this.formBuilder.group({
    name: ['', Validators.compose([
      Validators.required, 
      Validators.maxLength(12)
    ])],
    picture: [''],
    description: [''],
    instructions: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  constructor(
    private recipeService: RecipeService, 
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.info(this.recipeForm.value)
    this.recipeService.addRecipe(this.recipeForm.value).subscribe(
      (result: Number) => this.router.navigate(['/recipes/' + result])
    );
  }

  addInstruction() {
    this.instructions.push(this.formBuilder.control(''));
  }

  get instructions(): FormArray {
    console.info("instructions")
    return this.recipeForm.get('instructions') as FormArray;
  }
}
