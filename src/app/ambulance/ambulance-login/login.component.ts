import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup; // Initialize the form group

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]],
    });
  }

    async login(): Promise<void> {
    try {
      console.log(this.loginForm.value);
      const data = await this.authService.ambulanceLogin(this.loginForm.value).toPromise();

      localStorage.setItem('ambulanceId', data.ambulanceId);
      console.log('Ambulance Id saved in local storage:', data.ambulanceId);
      this.router.navigate(['/ambulance-dash']);
      if (data.status === 200) {
        this.router.navigate(['/ambulance-dash']);
      }
    } catch (error) {
      alert("Invalid Credentials");
    }
  }

  isFieldInvalid(field: string) {
    const control = this.loginForm.get(field);
    return control?.invalid && (control?.dirty || control?.touched);
  }
}
