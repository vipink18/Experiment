import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
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
    
    const apiUrl = `http://localhost:2024/api/v1/changePassword/${formData.email}/${formData.oldPassword}/${formData.newPassword}`;

    this.http.put(apiUrl, {})
    .pipe(
      tap(response => {
        this.isSubmitting = false;
        alert('Password changed successfully!');
        this.router.navigate(['/ambulanceLogin']);
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
