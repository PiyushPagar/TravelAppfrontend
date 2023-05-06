import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  constructor(private http:HttpClient) { }


  addNewCategoryService(data:any){
    return this.http.post<any>("http://localhost:9190/addNewTrip",data);
 }

}
