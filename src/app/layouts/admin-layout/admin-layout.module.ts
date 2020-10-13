import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';


import { UserComponent }            from '../../pages/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerModule } from 'app/shared/loading-spinner/LoadingSpinner.Module';
import { PopupComponent } from 'app/pages/popup/popup.component';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FlxUiDatatableModule, FlxUiDataTable} from 'flx-ui-datatable';

// Scroll
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from "ngx-pagination";
import { SubmitSpinnerComponent } from 'app/pages/submit-spinner/submit-spinner.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginComponent } from 'app/pages/user/login/login.component';
import { AuthGuard } from 'app/pages/user/auth.guard';
import { SalesComponent } from 'app/pages/sales/sales.component';
import { FinanceComponent } from 'app/pages/finance/finance.component';
import { SaleService } from 'app/pages/sales/sale.service';
import { SalesTableComponent } from 'app/pages/sales/sales-table/sales-table.component';
import { FinanceTableComponent } from 'app/pages/finance/finance-table/finance-table.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    LoadingSpinnerModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
    }),
    FlxUiDatatableModule,
    PerfectScrollbarModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Daterangepicker,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    UserComponent,
    PopupComponent,
    SubmitSpinnerComponent,
    LoginComponent,
    SalesComponent,
    FinanceComponent,
    SalesTableComponent,
    FinanceTableComponent
  ],
  providers:[

    FlxUiDataTable,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthGuard,
    SaleService
  ]
 })

export class AdminLayoutModule {}
