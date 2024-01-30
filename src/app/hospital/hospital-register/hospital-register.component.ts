import { Component } from '@angular/core';
import { Hospital } from '../model/Hospital';
import { HospitalRegisterService } from './hospital-register.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hospital-register',
  templateUrl: './hospital-register.component.html',
  styleUrls: ['./hospital-register.component.css'],
})
export class HospitalRegisterComponent {
  
  // hospital: Hospital = new Hospital();

  // constructor(private hospitalRegisterService: HospitalRegisterService, private router: Router) {}

  // ngOnInit() {}

  // hospitalRegister() {
  //   this.hospitalRegisterService.registerHospital(this.hospital).subscribe((data) => {
  //     alert('Hospital successfully registered!');
  //     this.router.navigate(['/hospitalLogin'])
  //   });
  // }

  registerForm!: FormGroup; // Initialize the form group

  constructor(
    private hospitalRegisterService: HospitalRegisterService, // Inject your auth service
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      hospitalName: ['', Validators.required],
      hospitalContactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      hospitalEmailId: ['', [Validators.required, Validators.email]],
      hospitalAddress: ['', Validators.required],
      hospitalLocation: ['', Validators.required],
      hospitalPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]],
    });
  }

  hospitalRegister() {
    if (this.registerForm.valid) {
      this.hospitalRegisterService.registerHospital(this.registerForm.value).subscribe(
        (data) => {
          alert('Hospital registered successfully!');
          this.router.navigate(['/hospitalLogin'])
        },
        (error) => {
          console.error('Error while registering hospital:', error);
        }
      );
    }
  }

  isFieldInvalid(field: string) {
    const control = this.registerForm.get(field);
    return control?.invalid && (control?.dirty || control?.touched);
  }
}
