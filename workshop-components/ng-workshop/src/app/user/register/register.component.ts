import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, rePasswordValidatorFactory } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../form-styles.css', './register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    const passwordControl = this.fb.control("", [Validators.required, Validators.minLength(4)]);
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, emailValidator]],
      tel: [""],
      password: passwordControl,
      rePassword: ["", [Validators.required, Validators.minLength(4), rePasswordValidatorFactory(passwordControl)]],
    })
  }

  ngOnInit(): void {
  }

  submitHandler(): void {
    console.log(this.form.value)
  }

}
