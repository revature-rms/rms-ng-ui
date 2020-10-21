import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

//TODO: implement actually logging in.

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  
  }

  get formFields() {
    return this.loginForm.controls;
  }
  
  login() {

    this.submitted=true;
    let username = this.formFields.email.value;
    let password = this.formFields.password.value;

    if (this.loginForm.invalid) return;

    this.loading = true;
    
    this.authService.authenticate(username, password);
                        // .subscribe(
                        //   () => {
                        //     this.loading = false;
                        //     console.log('login-successful');
                        //     // this.router.navigate(['/home']);
                        //   },
                        //   err => {
                        //     console.log(err);
                        //     this.loading = false;
                        //     this.submitted = false;
                        //   }
                        // );

  }
}