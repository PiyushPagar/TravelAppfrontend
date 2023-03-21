import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css'],
})
export class ClientRegistrationComponent implements OnInit {
  name: string = '';
  email: string = '';
  mobileNo: string = '';
  password: string = '';
  rePassword: string = '';

  vehiclename: string = '';
  VehicleNumber: string = '';
  dname: string = '';
  demail: string = '';
  dmobileNo: string = '';
  dpassword: string = '';
  drePassword: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
	}

  submit(registrationForm: NgForm) {
    if (registrationForm.valid && this.password === this.rePassword) {
      const body = {
        name: this.name,
        email: this.email,
        mobileNo: this.mobileNo,
        password: this.password
      };
      this.http.post('http://localhost:9190/api/auth/signup', body).subscribe(response => {
        console.log(response);
      });
    }
  }
}