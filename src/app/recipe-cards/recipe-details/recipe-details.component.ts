import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


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
      console.log('It works!');
      console.log(data.matches);
      console.log(data.matches[0].id);
    });

    this.recipesService.currentMessage.subscribe(message =>
      this.message = message
    );

  }
}
