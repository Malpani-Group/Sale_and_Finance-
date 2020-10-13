import { Routes } from '@angular/router';

import { UserComponent } from '../../pages/user/user.component';

import { LoginComponent } from 'app/pages/user/login/login.component';
import { SalesComponent } from 'app/pages/sales/sales.component';
import { SalesTableComponent } from 'app/pages/sales/sales-table/sales-table.component';
import { FinanceComponent } from 'app/pages/finance/finance.component';
import { FinanceTableComponent } from 'app/pages/finance/finance-table/finance-table.component';
import { AuthGuard } from 'app/pages/user/auth.guard';


export const AdminLayoutRoutes: Routes = [
    { path: 'user',                  component: UserComponent },



    { path: 'login',                 component:LoginComponent},


    { path: 'sales',                  component:SalesComponent,      canActivate:[AuthGuard]},
    { path: 'sales-table',           component:SalesTableComponent,  canActivate:[AuthGuard]},

    { path:'finance',                component:FinanceComponent,       canActivate:[AuthGuard]},
    { path:'finances-table',         component:FinanceTableComponent,  canActivate:[AuthGuard]}

];
