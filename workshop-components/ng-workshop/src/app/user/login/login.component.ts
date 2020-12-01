import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    email: {
      touched: false,
      value: ""
    },
    password: {
      touched: false,
      value: ""
    }
  };

  get showEmailError(): boolean {
    return this.form.email.touched && this.form.email.value.length === 0;
  }

  get showPasswordError(): boolean {
    return this.form.password.touched && this.form.password.value.length === 0;
  }

  get hasFormErrors(): boolean {
    return this.form.email.value.length === 0 || this.form.password.value.length === 0;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  updateInputValue(name: "email" | "password", value: string): void {
    this.form[name].touched = true;
    this.form[name].value = value;
  }

  submitFormHandler(): void {
    console.log(this.form)
    this.userService.login();
  }

}
