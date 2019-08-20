import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = 'http://recipeapp.test/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    })
  };

  getSavedRecipes() {
    return this.http.get<any>(`${this.baseUrl}/saved-recipes`, this.httpOptions);
  }

  saveRecipe(recipe) {
    console.log(recipe); // loggar ut objektet korrekt

    // skicka med user_id nedan?
    const requestBody = {
      recipe_id: recipe.id,
      name: recipe.name,
      image: recipe.images[0].hostedMediumUrl
    };

    console.log(requestBody);

    const request = this.http.post(`${this.baseUrl}/saved-recipes`, requestBody, this.httpOptions);
    request.subscribe(message => message);
  }
}
