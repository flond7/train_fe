import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder, public AuthService: AuthService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    console.log('Your order has been submitted' + this.loginForm.value);
    this.loginForm.reset();
  }

}
