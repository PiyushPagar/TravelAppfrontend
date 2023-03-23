import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  userEmail: any ;
  userName: any;
  ngOnInit(): void {
    this.setUseremail();
  }

  setUseremail(){
    this.userEmail == this.loginService.getEmail();
    this.userName == this.loginService.getName();
  }

  logoutUser()
  {
    this.loginService.logout();
    location.reload();
  }

}
