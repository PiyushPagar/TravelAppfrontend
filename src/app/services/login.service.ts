import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url ="http://localhost:9190"

  constructor( private http :HttpClient) { }


  doLogin(credentials:any){
    return this.http.post(`${this.url}/api/auth/signin`,credentials)
  }

  loginUser(token: any){
      localStorage.setItem("token",token);
      return true;
  }

  
  setRole(role: any){
    localStorage.setItem("role",role );
    return true;
  }

  getRole(){
    return localStorage.getItem("role");
  }

  setName(name: string){
    localStorage.setItem("name",name );
    return true;
  }
  getName(){
    return localStorage.getItem("name");
  }

  setEmail(email: string){
    localStorage.setItem("email",email );
    return true;
  }
  getEmail(){
    return localStorage.getItem("email");
  }

  setId(id: any){
    localStorage.setItem("id",id );
    return true;
  }
  getId(){
    return localStorage.getItem("id");
  }
  isLoggedIn()
  {
    var token = localStorage.getItem("token");
    if(token==undefined || token== '' || token==null)
    {
      return false;
    }else{
      return true;
    }
  }

  isadmin()
  {
    var token = this.getRole();
    if(token=="ROLE_DRIVER")
    {
      return true;
    }else{
      return false;
    }
  }



  logout(){
    localStorage.clear();
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }
}
