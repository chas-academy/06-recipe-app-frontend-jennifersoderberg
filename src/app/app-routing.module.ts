import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-cards/recipe-details/recipe-details.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';

const routes: Routes = [
  { path: '', component: RecipeCardsComponent},
  { path: 'details/:id', component: RecipeDetailsComponent},
  { path: 'mysavedrecipes', component: SavedRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
