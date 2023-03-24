import { Component, OnInit } from '@angular/core';
import { GlobalComponent } from 'src/app/Global/GlobalVarible';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  sideBarOpen = true;
  check :string="";
  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {

    // this.check = JSON.parse(localStorage.getItem("name"));

  }

  
}
