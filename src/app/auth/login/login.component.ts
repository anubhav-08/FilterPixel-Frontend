import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginUserData:any = {}
  constructor (private _auth: AuthService, private _router:Router) {
    // if(this._auth.loggedIn())
    // {
    //   alert("already logged in");
    //   this._router.navigate(['gallery'])
    // }
  }
  ngOnInit()
  {

  }
  loginUser()
  {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
      localStorage.setItem('access', res.tokens.access);
      localStorage.setItem('refresh', res.tokens.refresh);

      this._router.navigate(['']);
      // return true;
    });
  }
  
}
