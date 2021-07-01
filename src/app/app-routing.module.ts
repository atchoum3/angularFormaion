import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: 'recipes/add',
    component: RecipeAddComponent,
    pathMatch: 'full'

  },
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    pathMatch: 'full'

  },
  {
    path: 'recipes',
    component: RecipeListComponent,
    pathMatch: 'full'

  },
  {
    path: '**',
    redirectTo: 'recipes',
    pathMatch: 'full'
  }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
