import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private router: Router,
    private dialog: MatDialog,
    private dailogRef: MatDialogRef<ViewBookingsComponent>,
    @Inject(MAT_DIALOG_DATA) public viewRide:Number, private http: HttpClient) { }


    displayedColumns: string[] = [
      'userId',
      'pickupLocation',
      'pickupStatus',
      'createdDate',
      'email',
      'mobileNo',
      
    ];

   
  ngOnInit(): void {

  }

}
