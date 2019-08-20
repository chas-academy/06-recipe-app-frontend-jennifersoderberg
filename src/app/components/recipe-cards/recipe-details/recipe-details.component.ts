import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { RecipesService } from '../../../Services/recipes.service';
import { SavedRecipesService } from '../../../Services/saved-recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  accessToken = localStorage.getItem('token');
  recipe = {};
  message: string;
  searchString: string;
  q: string;

  constructor(
    private recipesService: RecipesService,
    private savedRecipeService: SavedRecipesService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
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

  addRecipeToList(recipe) {
    if (this.accessToken) {
      // console.log('token!');
      this.savedRecipeService.saveRecipe(recipe);
    } else {
      // console.log('no token');
      this.router.navigateByUrl('/login');
    }
  }
}
