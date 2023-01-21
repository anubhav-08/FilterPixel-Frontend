import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { RegisterComponent } from './register/register.component'


@NgModule({
  declarations: [
    LoginComponent,
    SocialLoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SocialLoginModule,
  ],
  exports: [
    LoginComponent,
    SocialLoginComponent
  ]
})
export class AuthModule { }
