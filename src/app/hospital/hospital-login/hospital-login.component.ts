import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent {
  // loginData = {
  //   emailId: '',
  //   password: ''
  // };

  // constructor(private authService: AuthService, private router: Router) {}

  // async login(): Promise<void> {
  //   try {
  //     const data = await this.authService.hospitalLogin(this.loginData).toPromise();

  //     localStorage.setItem('hospitalId', data.hospitalId);
  //     console.log('Car ID saved in local storage:', data.hospitalId);
  //     this.router.navigate(['/hospital-dash']);
  //     if (data.status === 200) {
  //       this.router.navigate(['/hospital-dash']);
  //     }
  //   } catch (error) {
  //     console.error('Error creating hospital data:', error);
  //   }
  // }

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
      const data = await this.authService.hospitalLogin(this.loginForm.value).toPromise();

      localStorage.setItem('hospitalId', data.hospitalId);
      console.log('Hospital Id saved in local storage:', data.hospitalId);
      this.router.navigate(['/hospital-dash']);
      if (data.status === 200) {
        this.router.navigate(['/hospital-dash']);
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
