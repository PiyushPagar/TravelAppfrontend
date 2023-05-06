import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddNewTripComponent } from '../add-new-trip/add-new-trip.component';
import { ViewBookingsComponent } from '../view-bookings/view-bookings.component';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.css']
})
export class DriverDashboardComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllTrips();
  }

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
    
  }

  displayedColumns: string[] = [
    'Id',
    'tripStartTime',
    'tripEndTime',
    'tripStartFrom',
    'tripEndTo',
    'tripPrice',
    'capacity',
    'tripStatus',
    'vehicleName',
    'vehicleDetails',
   
    'action'
  ];

  // 'edit',

  getAllTrips() {
    var userids=localStorage.getItem('id');
    return this.http
      .get<any>(
        'http://localhost:9190/getgetTripDetailsbyuserid/'+userids,
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          // console.log(this.searchForm.value);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          //alert("error");
          console.log('error');
        },
      });
  }



  addNewTrip() {
    this.dialog
      .open(AddNewTripComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe(() => {
        this.getAllTrips();
      });
  }

  editStatus() {
    this.dialog
      .open(AddNewTripComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe(() => {
        this.getAllTrips();
      });
  }


  viewBooking(row: any) {
    this.dialog
      .open(ViewBookingsComponent, {
        width: '45%',
        data: { parent: this,data:row},
      })
      .afterClosed()
      .subscribe(() => {
        
      });
  }



}
