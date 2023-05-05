import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';
import { DriverDashboardComponent } from './components/driver-dashboard/driver-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from './services/auth.guard';
import { RoleGuard } from './services/role.guard';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { UserAllBookingComponent } from './components/user-all-booking/user-all-booking.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'clientregistration',
    component: ClientRegistrationComponent,
  },
  {
    path: 'driverdashboard',
    component: DriverDashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'clientdashboard',
    component: ClientDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
  },
  {
    path: 'userallbookings',
    component: UserAllBookingComponent,
    canActivate: [AuthGuard, RoleGuard],
  },
  {
    path: 'side',
    component: SidebarComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
