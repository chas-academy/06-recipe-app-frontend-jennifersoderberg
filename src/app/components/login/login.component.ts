import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { UsersService } from '../../Services/users.service';
import { TokenService } from '../../Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private Users: UsersService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
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
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/');
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
