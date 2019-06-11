import { Component, OnInit } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public form = {
    email: null,
    password: null
  };

  onSubmit() {
    // console.log(this.form);
    this.http.post('http://recipeapp.test/api/login', this.form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

}
