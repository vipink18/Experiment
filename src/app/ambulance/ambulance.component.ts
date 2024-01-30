import { Component } from '@angular/core';
import { AmbulanceService } from './ambulance.service';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent{

  posts:any;

  constructor(private service: AmbulanceService){}

  ngOnInit(){
    this.service.viewAllAmbulances().subscribe(response => {
      this.posts = response;
    });
  }

}