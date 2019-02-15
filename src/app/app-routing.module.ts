import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-cards/recipe-details/recipe-details.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';

const routes: Routes = [
  { path: '', component: RecipeCardsComponent},
  { path: 'details/:id', component: RecipeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
