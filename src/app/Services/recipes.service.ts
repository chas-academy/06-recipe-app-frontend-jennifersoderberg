import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private messageSource = new BehaviorSubject<any>('default message'); // håller värdet som ska bli delat med andra komponenter
  currentMessage = this.messageSource.asObservable();

  private searchResults = new BehaviorSubject<any>([]);
  currentSearchResults = this.searchResults.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  yummlyRequest() {
    return this.http.get<any>(`${environment.apiUrl}/recipes?_app_id=${environment.yummlyAppId}&_app_key=${environment.yummlyAppKey}`);
  }

  yummlyRequestOne(recipeId) {
    return this.http.get<any>(
      `${environment.apiUrl}/recipe/${recipeId}?_app_id=${environment.yummlyAppId}&_app_key=${environment.yummlyAppKey}`
    );
  }

  yummlySearchRequest(searchString, preferances) {
    const checkedPreferances = [];

    preferances.forEach(element => {
      if (element.includes('^')) {
        checkedPreferances.push(`&allowedAllergy[]=${element}`);
      } else {
        checkedPreferances.push(`&allowedCourse[]=${element}`);
      }
    });

    const preferanceString = checkedPreferances.join('');

    console.log(`${environment.apiUrl}/recipes?_app_id=${environment.yummlyAppId}&_app_key=${environment.yummlyAppKey}&q=${searchString}${preferanceString}`);

    return this.http.get<any>(
      `${environment.apiUrl}/recipes?_app_id=${environment.yummlyAppId}&_app_key=${environment.yummlyAppKey}&q=${searchString}${preferanceString}`
    ).subscribe(recipes => {
      this.searchResults.next(recipes);
    });
  }
}
