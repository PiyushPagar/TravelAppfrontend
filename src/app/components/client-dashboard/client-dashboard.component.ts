import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global/GlobalVarible';
import { LoginService } from 'src/app/services/login.service';
import { ViewRideComponent } from '../view-ride/view-ride.component';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css'],
})
export class ClientDashboardComponent implements OnInit {
  constructor(private loginService: LoginService,
    private dialog: MatDialog, private http: HttpClient) {}
  sideBarOpen = true;
  norideshow=false ;
  showbelowcard=false;
  check: string = '';
  totalRideList:any[]=[];
  startPoint: string = '';
  endPoint: string = '';
  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
    // this.check = JSON.parse(localStorage.getItem("name"));
  }

  viewRide(row:any){
    this.dialog.open(ViewRideComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
        // this.getAllOrders();
    })
  }

  try(searchDestinationForm: NgForm) {
    if (searchDestinationForm.valid) {
      console.log(this.startPoint);
      console.log(this.endPoint);
      this.http
        .get('http://localhost:9190/getTripDetailsbysearch/'+this.startPoint+'/'+this.endPoint)
        .subscribe(
          (response: any) => {
            
            if(response.length>0){
              this.norideshow=true;
              this.totalRideList=response;
              console.log(response);
            }else{
              this.norideshow=false;
            }
            this.showbelowcard=true
            // window.location.href="/login";
          },
          (error) => {
            console.log(error);
            alert(error.error.message);
          }
        );
    }
  }
}
