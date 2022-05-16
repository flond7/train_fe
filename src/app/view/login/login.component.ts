import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, public AuthService: AuthService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    let l = {"username": this.loginForm.value.user, "password": this.loginForm.value.password}
    //console.log(this.loginForm.value)
    this.AuthService.login(l);
    this.loginForm.reset();
  }

}
