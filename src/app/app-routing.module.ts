import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'gallery',
    pathMatch : 'full'
  },
  {
    path : 'gallery',
    component : GalleryComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
