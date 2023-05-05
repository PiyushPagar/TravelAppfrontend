import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Console } from 'console';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-ride',
  templateUrl: './view-ride.component.html',
  styleUrls: ['./view-ride.component.css']
})
export class ViewRideComponent implements OnInit {
  public myValue: string="Not Mention";
  DriverDetails:any;
  userId=localStorage.getItem('id');
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private dailogRef: MatDialogRef<ViewRideComponent>,
    @Inject(MAT_DIALOG_DATA) public viewRide:any, private http: HttpClient) { }
    id:any=localStorage.getItem("id");
  ngOnInit(): void {
    this.viewRide
    this.getDriverDetails(this.id);
  }

  BookRide(row: any){
    const body ={
      "pickupLocation": this.myValue,
      "pickupStatus": "booked",
      "status": "active",
      "tripDetailsId": row.id,
      "userId": this.userId
    };
    this.http.post('http://localhost:9190/addNewBooking', body).subscribe(
      (response: any) => {
        console.log(response.message);
        window.location.href="/userallbookings";
        // this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
      }
    );
    console.log(body)
      


  }
  viewImage() {
    this.dialog
      .open(HomeComponent, {
        width: '40%',
     //   data: { parent: this,data:row},row: any
      })
      .afterClosed()
      .subscribe((val) => {
        // if(val=== 'update')
        // {
        //   this.getAllProducts();
        // }
      });
  }


  getDriverDetails(id:number){
    this.http
    .get('http://localhost:9190/api/auth/getuser/'+id)
    .subscribe(
      (response: any) => {
        this.DriverDetails =response;
        console.log(response);
        // window.location.href="/userallbookings";
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
      }
    );
  
  }

}
