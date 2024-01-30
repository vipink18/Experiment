import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/ambulance/ambulance-login/login.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './ambulance/ambulance-register/register.component';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewnearbyhospitalsComponent } from './ambulance/viewnearbyhospitals/viewnearbyhospitals.component';
import { ChangepasswordComponent } from './ambulance/changepassword/changepassword.component';
import { AmbulanceDashboardComponent } from './ambulance/ambulance-dashboard/ambulance-dashboard.component';
import { HospitalDashboardComponent } from './hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PreviousHospitalBookingComponent } from './hospital/previous-bookings/previous-bookings.component';
import { UserComponent } from './user/user.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserChangePasswordComponent } from './user/user-change-password/user-change-password.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { BookAmbulanceComponent } from './user/book-ambulance/book-ambulance.component';
import { BookHospitalComponent } from './user/book-hospital/book-hospital.component';
import { ViewAmbulanceComponent } from './user/view-ambulance/view-ambulance.component';
import { ViewHospitalsComponent } from './user/view-hospitals/view-hospitals.component';
import { UpdateDetailsComponent } from './ambulance/update-details/update-details.component';
import { UpdateUserDetailsComponent } from './user/update-user-details/update-user-details.component';
import { UpdateHospitalDetailsComponent } from './hospital/update-hospital-details/update-hospital-details.component';
import { HospitalLoginComponent } from './hospital/hospital-login/hospital-login.component';
import { HospitalRegisterComponent } from './hospital/hospital-register/hospital-register.component';
import { ChangeHospitalPasswordComponent } from './hospital/change-hospital-password/change-hospital-password.component';
import { PreviousUserBookingsComponent } from './user/previous-user-bookings/previous-user-bookings.component';
import { UnifiedLoginComponent } from './unified-login/unified-login.component';
import { PreviousAmbulanceBookingsComponent } from './ambulance/previous-ambulance-bookings/previous-ambulance-bookings.component';
import { PaymentComponent } from './payment/payment.component';
import { AnotherpageComponent } from './homepage/anotherpage/anotherpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AmbulanceComponent,
    RegisterComponent,
    ViewnearbyhospitalsComponent,
    ChangepasswordComponent,
    AmbulanceDashboardComponent,
    HospitalDashboardComponent,
    HospitalComponent,
    PreviousHospitalBookingComponent,
    UserComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserChangePasswordComponent,
    UserDashboardComponent,
    BookAmbulanceComponent,
    BookHospitalComponent,
    ViewAmbulanceComponent,
    ViewHospitalsComponent,
    UpdateDetailsComponent,
    UpdateUserDetailsComponent,
    UpdateHospitalDetailsComponent,
    HospitalLoginComponent,
    HospitalRegisterComponent,
    ChangeHospitalPasswordComponent,
    PreviousUserBookingsComponent,
    UnifiedLoginComponent,
    PreviousAmbulanceBookingsComponent,
    PaymentComponent,
    AnotherpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
