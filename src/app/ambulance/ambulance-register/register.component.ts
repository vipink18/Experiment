// import { Component } from '@angular/core';
// import { Ambulance } from '../model/ambulance';
// import { RegisterService } from './register.service';
import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
// })
// export class RegisterComponent{

//   ambulance: Ambulance = new Ambulance();

//   constructor(private registerService: RegisterService){ }

//   ngOnInit(): void{

//   }

//   ambulanceRegister(){
//     // console.log(this.ambulance);
//     this.registerService.registerAmbulance(this.ambulance).
//     subscribe(data => {alert('Driver successfully registered!')})
//     // Reset the form after submission
//     // this.ambulance = new Ambulance();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ambulance } from '../model/ambulance';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup; // Initialize the form group
  
  constructor(
    private ambulanceRegisterService: RegisterService, // Inject your ambulance driver registration service
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      ambDriverName: ['', Validators.required],
      ambDriverContactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      ambDriverEmailId: ['', [Validators.required, Validators.email]],
      ambDriverLocation: ['', Validators.required],
      ambDriverPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]],
      ambStatus: ['', Validators.required],
      ambType: ['', Validators.required]
    });
  }

  ambulanceRegister() {
    if (this.registerForm.valid) {
      // Send data to the backend using your AmbulanceDriverRegisterService
      this.ambulanceRegisterService.registerAmbulance(this.registerForm.value).subscribe(
        (data) => {
          alert('Ambulance driver registered successfully!');
          this.router.navigate(['/ambulanceLogin']);
          // You can navigate to a success page or perform other actions here
        },
        (error) => {
          console.error('Error while registering ambulance driver:', error);
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

