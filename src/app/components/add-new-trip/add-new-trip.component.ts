import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global/GlobalVarible';

@Component({
  selector: 'app-add-new-trip',
  templateUrl: './add-new-trip.component.html',
  styleUrls: ['./add-new-trip.component.css']
})
export class AddNewTripComponent implements OnInit {
    userIdss = localStorage.getItem('id');
    numberUserId = Number(this.userIdss);
  constructor(
    private formBuilder: FormBuilder,
 //   private addUserService: AddUserService,
    private dailogRef: MatDialogRef<AddNewTripComponent>
  ) { }
  newTripCredentials = {
    "capacity": "",
    "tripEndTime": "",
    "tripEndTo": "",
    "tripPrice": "",
    "tripStartFrom": "",
    "tripStartTime": "",
    "tripStatus": GlobalComponent.tripstatusinitial,
    "userId": this.numberUserId,
    "vehicleDetails": "",
    "vehicleName": ""
  };
  userForm!: FormGroup;
  ngOnInit(): void {
   

    this.userForm = this.formBuilder.group(
      {
        capacity: ['' ],
        tripEndTime: [''],
        tripEndTo: [''],
        tripPrice: [ ''],
        tripStartFrom: [''],
        tripStartTime: [''],
        tripStatus: ['' ],
        userId: [],
        vehicleDetails: [''],
        vehicleName: [ ''],
      },
    );
  }

  addNewTrip(){
    console.log(this.newTripCredentials)
  }

}
