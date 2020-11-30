import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent],
  imports: [
    CommonModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
