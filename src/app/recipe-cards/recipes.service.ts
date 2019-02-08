import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get<any>('http://api.yummly.com/v1/api/recipes?_app_id=268d6b88&_app_key=886b1f26a1a4d4bf74e89d2769579f90');
  }
}