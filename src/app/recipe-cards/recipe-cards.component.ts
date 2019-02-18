import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.css']
})

export class RecipeCardsComponent implements OnInit {
  title = 'recipe-cards';
  recipes = [];
  message: string;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.yummlyRequest().subscribe(data => {
      this.recipes = data.matches;
    });

    this.recipesService.currentMessage.subscribe(message => this.message = message);
  }

    recipeDetails(e) {
      this.recipesService.changeMessage(e);
    }
}
