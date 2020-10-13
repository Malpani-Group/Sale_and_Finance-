import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  url = 'http://www.pratik.somee.com/api/Finances';

  constructor(private http:HttpClient) { }

  getFinanceData(){
    return this.http.get(this.url);
  }

}
