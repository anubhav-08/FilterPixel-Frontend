import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit{
  clientId = "1098504486677-6nh1ajb6116e71vnlpbthuh0n8pu86v3.apps.googleusercontent.com";
  constructor(private _socialAuth:SocialAuthService) {}
  ngOnInit()
  {

  }
  loginWithGoogle()
  {
    console.log('clicked');
    // this._socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then(res=>{
    //   console.log(res);
    // })
  }
}
