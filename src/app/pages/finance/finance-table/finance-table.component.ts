import { Component, OnInit } from '@angular/core';
import { Finance } from '../finance.model';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'app-finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.css']
})
export class FinanceTableComponent implements OnInit {
  loadingSpinner = false;
  finances:Finance[];
  message:string;

   //Pagination
   config: any = null;
   collection = { count: this.config, data: [] };
   //

   constructor( private FinanceService:FinanceService) {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i + 1,
        value: "items number" + (i + 1)
      });
    }

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
   }

   pageChanged(event) {
    this.config.currentPage = event;
  }

  getSales(){
    this.loadingSpinner = true;
   this.FinanceService.getFinanceData().subscribe(data=>{
   this.finances = data as [];
   this.loadingSpinner = false;
   },err=>{
     console.log(err);
     this.loadingSpinner = false;
   })
  }

  ngOnInit(): void {
    this.getSales();
  }



}
