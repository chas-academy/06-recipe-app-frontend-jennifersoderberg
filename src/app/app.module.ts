import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { RecipeDetailsComponent } from './recipe-cards/recipe-details/recipe-details.component';
import { HeaderComponent } from './header/header.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';
import { UsersService } from './Services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardsComponent,
    RecipeDetailsComponent,
    HeaderComponent,
    SavedRecipesComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
