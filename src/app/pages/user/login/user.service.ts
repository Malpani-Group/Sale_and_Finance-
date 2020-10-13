import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootURL="http://www.pratik.somee.com/";

  constructor(private http:HttpClient) { }


  userAuthentication(username,password){
    var data="username="+username+"&password="+password+"&grant_type=password";
    var header = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    return this.http.post(this.rootURL+'token',data,{headers:header});
  }

  get isLoggedIn():boolean{
    const user = localStorage.getItem('userToken');
    return (user !== null) ? true :false;
  }


}
