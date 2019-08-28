import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipesService } from '../../Services/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Whats cooking?';
  searchString = '';
  searchedRecipes = [];
  message: string;

  constructor(
    private recipesService: RecipesService
  ) {}

  ngOnInit() {}

  handleRecipeClick = (form: NgForm) => {
    const preferances = this.checkedPreferances(form);
    const searchString = form.value.searchString;

    this.recipesService.yummlySearchRequest(searchString, preferances);
  }

  checkedPreferances = (form: NgForm) => {
    const preferances = [];

    for (const i in form.value) {
      if (form.value[i] === true ) {
        preferances.push(i);
      }
    }
    return preferances;
  }

  getSearchResult(i) {
    this.recipesService.changeMessage(i);
  }

}
