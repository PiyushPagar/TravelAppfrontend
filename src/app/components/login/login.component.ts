import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  constructor( private loginService:LoginService) {}

  ngOnInit(): void {}

  OnSubmit() {
    
    if (
      this.credentials.email != '' &&
      this.credentials.password != '' &&
      this.credentials.email != null &&
      this.credentials.password != null
    ) {
      console.log('form is submitted');
      this.loginService.doLogin(this.credentials).subscribe(
        (response:any)=>{
            console.log(response.result.id);
            this.loginService.loginUser(response.result.jwtToken);
            this.loginService.setId(response.result.id)
            this.loginService.setRole(response.result.role);
            this.loginService.setName(response.result.name);
            console.log(this.loginService.isLoggedIn());
            this.loginService.setEmail(response.result.email);
            if(response.result.role=="ROLE_ADMIN"){
              window.location.href="/driverdashboard";
            }
            if(response.result.role=="ROLE_USER"){
              window.location.href="/clientdashboard";
            }
            
        },
        error=>{
          console.log(error);
        }
      )

    }else{

      alert("field is empty")
    }
  }
}
