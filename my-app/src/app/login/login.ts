import { Component, signal } from '@angular/core';
import { Form } from '@angular/forms';
import { LoginData } from '../login-data';
import { email, form, FormField, required, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, { message: 'Email is required' });
    email(fieldPath.email, { message: 'Enter a valid emai address' });
    required(fieldPath.password, { message: 'Password is required' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.loginForm, async () => {
      const crendentials = this.loginModel();
      console.log('Logging in with', crendentials);
    });
  }
}
