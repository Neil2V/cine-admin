import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginAdmin } from 'src/app/models/login-admin';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginAdmin: LoginAdmin;
  username: string;
  password: string;
  roles: string[] = [];

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
      }
  }

  onLogin(): void {
    this.loginAdmin = new LoginAdmin(this.username, this.password);
    this.authService.login(this.loginAdmin).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/']);
        this.toastr.success('Bienvenido '+data.username, 'Ok!',{
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
      },
      err => {
        this.isLogged = false;
        this.toastr.error('Error', 'Fail!',{
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
      }
    );
  }

}
