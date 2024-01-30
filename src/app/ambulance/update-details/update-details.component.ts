import { Component } from '@angular/core';
import { UpdateDetailsService } from './update-details.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateUserDetailsService } from 'src/app/user/update-user-details/update-user-details.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent {

  ambDriverName!: string ;
  ambDriverContactNumber!: string;
  ambDriverLocation!: string;
  ambStatus!: string;
  ambType!: string;

  constructor(private updateDetailsService: UpdateDetailsService, private router: Router){}

  ngOnInit(): void{

    const ambulanceId = localStorage.getItem('ambulanceId')!;

      this.updateDetailsService.getDriverDetails(ambulanceId).subscribe((ambulanceDetails: any) => {
        this.ambDriverName = ambulanceDetails.ambDriverName;      
        this.ambDriverContactNumber = ambulanceDetails.ambDriverContactNumber;
        this.ambDriverLocation = ambulanceDetails.ambDriverLocation;
        this.ambStatus = ambulanceDetails.ambStatus;
        this.ambType = ambulanceDetails.ambType;
      });
  }

  updateDriverDetails(): void {

    const ambulanceId = localStorage.getItem('ambulanceId')!;

      const updatedDetails = {
        ambDriverName: this.ambDriverName,
        ambDriverContactNumber: this.ambDriverContactNumber,
        ambDriverLocation: this.ambDriverLocation,
        ambStatus: this.ambStatus,
        ambType: this.ambType
      };
  
      this.updateDetailsService.updateDriverDetails(ambulanceId, updatedDetails).subscribe(() => {
        alert("Ambulance details updated successfully!");
        this.router.navigate(['/ambulance-dash'])
      });
  }
}