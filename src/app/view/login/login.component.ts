import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private formBuilder: FormBuilder, public AuthService: AuthService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here

    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
