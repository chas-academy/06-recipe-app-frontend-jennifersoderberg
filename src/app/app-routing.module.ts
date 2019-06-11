import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-cards/recipe-details/recipe-details.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';

const routes: Routes = [
  { path: '', component: RecipeCardsComponent},
  { path: 'details/:id', component: RecipeDetailsComponent},
  { path: 'mysavedrecipes', component: SavedRecipesComponent},
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService] },
  { path: 'request-password-reset', component: RequestResetComponent },
  { path: 'response-password-reset', component: ResponseResetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
