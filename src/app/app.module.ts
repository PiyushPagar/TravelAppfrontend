import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DriverDashboardComponent } from './components/driver-dashboard/driver-dashboard.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {MatSliderModule} from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { ViewRideComponent } from './components/view-ride/view-ride.component';
import { ViewImageComponent } from './components/view-image/view-image.component';
import { UserAllBookingComponent } from './components/user-all-booking/user-all-booking.component';
import { AddNewTripComponent } from './components/add-new-trip/add-new-trip.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ViewBookingsComponent } from './components/view-bookings/view-bookings.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DriverDashboardComponent,
    ClientDashboardComponent,
    ClientRegistrationComponent,
    ViewRideComponent,
    ViewImageComponent,
    UserAllBookingComponent,
    AddNewTripComponent,
    ViewBookingsComponent,
    
  ],
  imports: [
    MatDatepickerModule,
    MatMenuModule,
    MatListModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatToolbarModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    MatSliderModule,
    AppRoutingModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
