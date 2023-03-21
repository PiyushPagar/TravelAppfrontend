import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DriverDashboardComponent } from './components/driver-dashboard/driver-dashboard.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DriverDashboardComponent,
    ClientDashboardComponent,
    ClientRegistrationComponent,
    NavBarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
