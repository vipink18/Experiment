// import { Component } from '@angular/core';
// import { User } from '../model/User';
// import { UserRegisterService } from './user-register.service';
import { Router } from '@angular/router';

// @Component({
//   selector: 'app-user-register',
//   templateUrl: './user-register.component.html',
//   styleUrls: ['./user-register.component.css']
// })
// export class UserRegisterComponent {

//     user: User = new User();

//     constructor(private userService: UserRegisterService){}

//     ngOnInit(){}

//     userRegister(){
//        this.userService.registerUser(this.user).subscribe(data => {
//         alert('User successfully registered!')
//       });
//     }

// }
// import { Component } from '@angular/core';
// import { User } from '../model/User';
// import { UserRegisterService } from './user-register.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-user-register',
//   templateUrl: './user-register.component.html',
//   styleUrls: ['./user-register.component.css']
// })
// export class UserRegisterComponent {

//   user: User = new User();
//   registerForm: FormGroup;

//   constructor(private userService: UserRegisterService, private formBuilder: FormBuilder) {
//     this.registerForm = this.formBuilder.group({
//       userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
//       userContactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//       userEmailId: ['', [Validators.required, Validators.email]],
//       userLocation: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
//       userPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?\\-=\\[\\]\\;\'\\\\,./~`])[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?\\-=\\[\\]\\;\'\\\\,./~`]+$')]]
//     });
//   }

//   get f() { return this.registerForm.controls; }

//   isFieldInvalid(fieldName: string): boolean {
//     const control = this.registerForm.get(fieldName);
//     return control?.invalid === true && control?.touched === true;
//   }


//   userRegister() {
//     if (this.registerForm.invalid) {
//       return;
//     }
//     console.log(this.user);
//     this.userService.registerUser(this.user).subscribe(data => {
//       alert('User successfully registered!');
//     });
//   }
  
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegisterService } from './user-register.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm!: FormGroup; // Initialize the form group

  constructor(
    private userRegisterService: UserRegisterService, // Inject your auth service
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userContactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      userEmailId: ['', [Validators.required, Validators.email]],
      userLocation: ['', Validators.required],
      userPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]],
    });
  }

  userRegister() {
    if (this.registerForm.valid) {
      // Send data to the backend using your AuthService
      this.userRegisterService.registerUser(this.registerForm.value).subscribe(
        (data) => {
          alert('User registered successfully!');
          this.router.navigate(['/userLogin'])
          // You can navigate to a success page or perform other actions here
        },
        (error) => {
          console.error('Error while registering user:', error);
          // Handle error, show error message, etc.
        }
      );
    }
  }

  isFieldInvalid(field: string) {
    const control = this.registerForm.get(field);
    return control?.invalid && (control?.dirty || control?.touched);
  }
}

