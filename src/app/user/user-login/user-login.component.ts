// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../../authentication/auth.service';

// @Component({
//   selector: 'app-user-login',
//   templateUrl: './user-login.component.html',
//   styleUrls: ['./user-login.component.css']
// })
// export class UserLoginComponent {
//   loginData = {
//     emailId: '',
//     password: ''
//   };

//   constructor(private authService: AuthService, private router: Router) {}

//   async login(): Promise<void> {

//     try {

//       const data = await this.authService.login(this.loginData).toPromise();

//       localStorage.setItem('userId', data.userId);

//       console.log('Car ID saved in local storage:', data.userId);

//       this.router.navigate(['/user-dash']);

//       if (data.status === 200) {

//         this.router.navigate(['/user-dash']);

//       }

//     } catch (error) {

//       alert("Invalid Credentials")

//     }

//   }
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
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
      const data = await this.authService.login(this.loginForm.value).toPromise();

      localStorage.setItem('userId', data.userId);
      console.log('User Id saved in local storage:', data.userId);
      this.router.navigate(['/user-dash']);
      if (data.status === 200) {
        this.router.navigate(['/user-dash']);
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
