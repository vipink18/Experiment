import { Component } from '@angular/core';
import { UpdateUserDetailsService } from './update-user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.css']
})
export class UpdateUserDetailsComponent {
  userId!: string;
  userName!: string;
  userContactNumber!: string;
  userLocation!: string;

  // new changes
  user: any = {};

  constructor(private updateUserDetailsService: UpdateUserDetailsService, private router: Router){}

  ngOnInit(): void{

  }

  updateUserDetails(): void {
    
    const userId = localStorage.getItem('userId')!;
    this.userId = userId;

      const updatedDetails = {
        userName: this.userName,
        userContactNumber: this.userContactNumber,
        userLocation: this.userLocation
      };
      this.updateUserDetailsService.updateUserDetails(userId, updatedDetails).subscribe((userData: any) => {
        this.user = userData;
        alert("User details updated successfully!");
        this.router.navigate(['/user-dash'])
      });
  }

}
