import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { RecipesService } from '../recipes.service';
import { SavedRecipesService } from '../../saved-recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe = {};
  message: string;
  searchString: string;
  q: string;

  constructor(
    private recipesService: RecipesService,
    private http: HttpClient,
    private savedRecipes: SavedRecipesService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    const recipeId = this.route.snapshot.params.id;
    this.getRecipe(recipeId);
    this.recipesService.currentMessage.subscribe(message => this.message = message);
  }

  getRecipe(recipeId) {
    this.recipesService.yummlyRequestOne(recipeId)
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }

  addRecipeToList(recipeId) {
    // Later
  }
}
