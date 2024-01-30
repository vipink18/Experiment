import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent {
  changePasswordForm!: FormGroup;
  isSubmitting: boolean = false;
  apiError: string = '';
  subscription: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { } // Inject HttpClient

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.changePasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.changePasswordForm.invalid) {
      return;
    }

    const formData = this.changePasswordForm.value;

    if (formData.newPassword !== formData.confirmNewPassword) {
      this.apiError = 'New passwords do not match.';
      return;
    }

    this.isSubmitting = true;
    
    const apiUrl = `http://localhost:2021/api/v1/user/changePassword/${formData.email}/${formData.oldPassword}/${formData.newPassword}`;

    this.http.put(apiUrl, {})
    .pipe(
      tap(response => {
        this.isSubmitting = false;
        alert('Password changed successfully!');
        this.router.navigate(['/userLogin']);
      }),
      catchError(error => {
        this.isSubmitting = false;
        this.apiError = 'An error occurred while changing password. Please try again.';
        // handling error
        console.error('Error changing password:', error);
        throw error; // Rethrowing the error to get back to the component
      })
    )
    .subscribe();
  }
}
