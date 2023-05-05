import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { log } from 'console';

@Component({
  selector: 'app-user-all-booking',
  templateUrl: './user-all-booking.component.html',
  styleUrls: ['./user-all-booking.component.css'],
})
export class UserAllBookingComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  userId = localStorage.getItem('id');
  constructor(private http: HttpClient) {}
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  displayedColumns: string[] = [
    'BookingId',
    'Date',
    'PickUpLocation',
    'Status',
    'driveremail',
    'drivernumber',
    'tripStartFrom',
    'tripEndTo',
    'Rate',
    'Capacity',
    'Cancel'
  ];

  ngOnInit(): void {
    this.getAllBooking()
  }

  deleteBooking(row:number){
    return this.http.get('http://localhost:9190/user/deleteBooking/' + row)
    .subscribe(
      (response: any) => {
        console.log(response);
        window.location.reload();
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }

  

  getAllBooking() {
    return this.http.get<any>('http://localhost:9190/user/getBookingByuserId/' + this.userId).subscribe({
      next: (res) => {
        console.log(res);
        console.log("try");
        console.log(res.records);
        //console.log(this.searchForm.value);
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

  
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
