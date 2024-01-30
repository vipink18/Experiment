import { Component } from '@angular/core';
import { UpdateHospitalDetailsService } from './update-hospital-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-hospital-details',
  templateUrl: './update-hospital-details.component.html',
  styleUrls: ['./update-hospital-details.component.css']
})
export class UpdateHospitalDetailsComponent {

  hospitalName!: string;
  hospitalContactNumber!: string;
  hospitalAddress!: string;    
  hospitalLocation!: string;

  constructor(private updateHospitalDetailsService: UpdateHospitalDetailsService, private router: Router){}

  ngOnInit(): void{

    const hospitalId = localStorage.getItem('hospitalId')!;

      this.updateHospitalDetailsService.getHospitalDetails(hospitalId).subscribe((hospitalDetails: any) => {
        this.hospitalName = hospitalDetails.hospitalName;      
        this.hospitalContactNumber = hospitalDetails.hospitalContactNumber;
        this.hospitalAddress = hospitalDetails.hospitalAddress;
        this.hospitalLocation = hospitalDetails.hospitalLocation;
      });
  }

  updateHospitalDetails(): void {
    const hospitalId = localStorage.getItem('hospitalId')!;

      const updatedDetails = {
        hospitalName: this.hospitalName,
        hospitalContactNumber: this.hospitalContactNumber,
        hospitalAddress: this.hospitalAddress,
        hospitalLocation: this.hospitalLocation
      };
  
      this.updateHospitalDetailsService.updateHospitalDetails(hospitalId, updatedDetails).subscribe(() => {
        alert("Hospital details updated successfully!");
        this.router.navigate(['/hospital-dash']);
      });
  }
}
