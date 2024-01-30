// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-unified-login',
//   templateUrl: './unified-login.component.html',
//   styleUrls: ['./unified-login.component.css']
// })
// export class UnifiedLoginComponent {

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-unified-login',
  templateUrl: './unified-login.component.html',
  styleUrls: ['./unified-login.component.css']
})
export class UnifiedLoginComponent implements OnInit {
  loginForm!: FormGroup; // Initialize the form group
  userType: string = 'user'; // Default user type
  // default ambulance type
  // default hospital type

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
      userType: ['user', Validators.required], 
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]],
    });
  }

  async login(): Promise<void> {
    const apiUrl = this.getApiUrlForUserType(this.userType);

    try {
      console.log(this.loginForm.value);
      // const data = await this.authService.login(apiUrl, this.loginForm.value).toPromise();

      // localStorage.setItem('userId', data.userId);

      // console.log('User ID saved in local storage:', data.userId);

      switch (this.userType) {
        case 'user':
          const data = await this.authService.login( this.loginForm.value).toPromise();
          localStorage.setItem('userId', data.userId);
          console.log('User ID saved in local storage:', data.userId);
          this.router.navigate(['/user-dash']);
          break;
        case 'ambulance':
          console.log(this.userType);
          console.log(this.loginForm.value);
          const data1 = await this.authService.ambulanceLogin( this.loginForm.value).toPromise();

          localStorage.setItem('ambulanceId', data1.ambulanceId);
          console.log('Ambulance Id saved in local storage:', data1.ambulanceId);
          this.router.navigate(['/ambulance-dash']);
          break;
        case 'hospital':
          console.log(this.userType);
          console.log(this.loginForm.value);  
          const data2 = await this.authService.hospitalLogin( this.loginForm.value).toPromise();
          console.log(data2);
          localStorage.setItem('hospitalId', data2.hospitalId);
          console.log('Hospital Id saved in local storage:', data2.hospitalId);
          this.router.navigate(['/hospital-dash']);
          break;
        default:
          throw new Error(`Invalid user type: ${this.userType}`);
      }
    } catch (error) {
      console.log(error)
    }
  }

  isFieldInvalid(field: string) {
    const control = this.loginForm.get(field);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  private getApiUrlForUserType(userType: string): string {
    switch (userType) {
      case 'user':
        return 'http://localhost:2021/api/v1/user/userLogin';
      case 'ambulance':
        return 'http://localhost:2024/api/v1/ambulance/ambulanceLogin';
      case 'hospital':
        return 'http://localhost:1998/api/v1/hospital/hospitalLogin';
      default:
        throw new Error(`Invalid user type: ${userType}`);
    }
  }
}

