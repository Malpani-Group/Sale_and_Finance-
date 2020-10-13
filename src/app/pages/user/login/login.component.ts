import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggingError = false;
  submitSpspinner = false;
  constructor(private userServie:UserService, private route:Router) { }

  ngOnInit(): void {

  }

  onSubmit(username, password){
    this.submitSpspinner = true;
  this.userServie.userAuthentication(username,password).subscribe((data:any)=>{
   localStorage.setItem('userToken',data.access_token);
   this.route.navigate(['/sales']);
   this.submitSpspinner = false;
  //  console.log(data);
  },(err:HttpErrorResponse)=>{
    this.loggingError = true;
    this.submitSpspinner = false;
  });
  }

}
