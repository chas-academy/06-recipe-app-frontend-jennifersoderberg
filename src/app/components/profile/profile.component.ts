import { Component, OnInit } from '@angular/core';
import { SavedRecipesService } from 'src/app/Services/saved-recipes.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  recipes: [];

  constructor(
    private savedService: SavedRecipesService
  ) { }

  ngOnInit() {
    this.savedService.getSavedRecipes().subscribe(response => {
      this.recipes = response.data;
    });
  }

}
