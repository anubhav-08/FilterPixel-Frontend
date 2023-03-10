import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerUserData:any = {}
  constructor (private _auth:AuthService, private _router:Router) {}
  ngOnInit()
  {

  }
  loginUser()
  {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
      alert("User successfully created!")

      this._router.navigate(['login']);
      // return true;
    }, err => console.log(err));
  }
}
