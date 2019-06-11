import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { TokenService } from '../Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private Users: UsersService,
    private Token: TokenService
  ) { }

  public form = {
    email: null,
    password: null
  };

  public error = null;

  onSubmit() {
    this.Users.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
