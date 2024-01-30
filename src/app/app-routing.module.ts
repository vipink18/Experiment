import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './ambulance/ambulance-register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './ambulance/ambulance-login/login.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { ViewnearbyhospitalsComponent } from './ambulance/viewnearbyhospitals/viewnearbyhospitals.component';
import { ChangepasswordComponent } from './ambulance/changepassword/changepassword.component';
import { AmbulanceDashboardComponent } from './ambulance/ambulance-dashboard/ambulance-dashboard.component';
import { HospitalDashboardComponent } from './hospital/hospital-dashboard/hospital-dashboard.component';
import { PreviousHospitalBookingComponent } from './hospital/previous-bookings/previous-bookings.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserChangePasswordComponent } from './user/user-change-password/user-change-password.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
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


const routes: Routes = [
  {component: HomepageComponent, path: ''},
  {component: RegisterComponent, path: 'ambulanceRegister'},
  {component: LoginComponent, path: 'ambulanceLogin'},
  {component: AmbulanceComponent, path: 'ambulanceDetails'},
  {component: ViewnearbyhospitalsComponent, path: 'viewNearbyHospitals'},
  {component: ChangepasswordComponent, path: 'changeAmbulancePassword'}, 
  {component: AmbulanceDashboardComponent, path: 'ambulance-dash'},
  {component: HospitalDashboardComponent, path: 'hospital-dash'},
  {component: PreviousHospitalBookingComponent, path: 'previousHospitalBookings'},
  {component: UserRegisterComponent, path: 'userRegister'},
  {component: UserLoginComponent, path: 'userLogin'},
  {component: UserChangePasswordComponent, path: 'changeUserPassword'},
  {component: UserDashboardComponent, path: 'user-dash'},
  {component: ViewAmbulanceComponent, path: 'viewAmbulances'},
  {component: ViewHospitalsComponent, path: 'viewHospitals'},
  {component: UpdateDetailsComponent, path: 'updateAmbulanceDriverDetails'},
  {component: UpdateUserDetailsComponent, path: 'updateUserDetails'},
  {component: UpdateHospitalDetailsComponent, path: 'updateHospitalDetails'},
  {component: HospitalLoginComponent, path: 'hospitalLogin'},
  {component: HospitalRegisterComponent, path: 'hospitalRegister'},
  {component: ChangeHospitalPasswordComponent, path: 'changeHospitalPassword'},
  {component: PreviousUserBookingsComponent, path: 'previousUserBookings'},
  {component: UnifiedLoginComponent, path: 'login'},
  {component: PreviousAmbulanceBookingsComponent, path: 'previousAmbulanceBookings'},
  {component: PaymentComponent, path: 'payment'},
  {component: AnotherpageComponent, path:'anotherpage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
