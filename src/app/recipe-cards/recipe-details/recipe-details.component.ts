import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipes = [];
  message: string;
  searchString: string;
  q: string;

  constructor(
    private recipesService: RecipesService,
    private http: HttpClient
    ) { }


  ngOnInit() {
    this.recipesService.currentMessage.subscribe(message => this.message = message);
    this.getRecipe(this.message);
    console.log(this.message);
  }

  getRecipe(e) {
    this.recipesService.yummlyRequest().subscribe(data => {
      this.recipes = data;
    });
  }

  yummlyRequest = (q: any) => {
    this.searchString = q.id;
    return this.http.get(
      `http://api.yummly.com/v1/api/recipe/${this.searchString}?_app_id=268d6b88&_app_key=886b1f26a1a4d4bf74e89d2769579f90`
    );
  }
}
