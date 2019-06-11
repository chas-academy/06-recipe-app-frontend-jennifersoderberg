import { Component, OnInit } from '@angular/core';
import { SavedRecipesService } from '../saved-recipes.service';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  message: any;
  savedRecipesList = [];

  constructor(private savedRecipes: SavedRecipesService) { }

  ngOnInit() {
    this.savedRecipes.currentMessage.subscribe(message => this.message = message);
    console.log(this.savedRecipes);
  }



}
