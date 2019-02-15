import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { RecipeDetailsComponent } from './recipe-cards/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardsComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
