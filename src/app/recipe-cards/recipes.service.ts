import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private messageSource = new BehaviorSubject<any>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  yummlyRequest() {
    return this.http.get<any>('http://api.yummly.com/v1/api/recipes?_app_id=268d6b88&_app_key=886b1f26a1a4d4bf74e89d2769579f90');
  }
}
