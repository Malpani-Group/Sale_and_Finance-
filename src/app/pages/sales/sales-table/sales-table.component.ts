import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sales.model';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css']
})
export class SalesTableComponent implements OnInit {
  loadingSpinner = false;
  sales:Sale[];
  message:string;

   //Pagination
   config: any = null;
   collection = { count: this.config, data: [] };
   //

   constructor( private SaleService:SaleService ) {
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
   this.SaleService.getSalesData().subscribe(data=>{
   this.sales = data as [];
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
