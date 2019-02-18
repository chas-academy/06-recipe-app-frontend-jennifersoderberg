import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipes = [];
  message: string;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private readonly router: Router,
    ) { }


  ngOnInit() {
    this.recipesService.getRecipes().subscribe(data => {
      this.recipes = data.matches;
      console.log(data.matches);
    });

    this.recipesService.currentMessage.subscribe(message =>
      this.message = message
    );
  }
}
