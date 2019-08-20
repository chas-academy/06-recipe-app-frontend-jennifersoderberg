import { Component, OnInit } from '@angular/core';
import { RecipesService } from './../../Services/recipes.service';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.css']
})

export class RecipeCardsComponent implements OnInit {
  title = 'recipe-cards';
  recipes = [];
  message: string;

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    // To get default recipes on load
    this.recipesService.yummlyRequest().subscribe(recipes => {
      this.recipes = recipes.matches;
    });

    // Subscribe to observable of the current search results in the service, this will update recipes on every new search
    this.recipesService.currentSearchResults.subscribe(recipes => {
        this.recipes = recipes.matches;
    });

    // Subscribe to observable of the current search value (query)
    this.recipesService.currentMessage.subscribe(message => this.message = message);
  }

  recipeDetails(i) {
    this.recipesService.changeMessage(i);
  }
}
