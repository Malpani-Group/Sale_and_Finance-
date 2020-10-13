import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/pages/user/login/user.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',          icon: 'fa fa-university',       class: '' },
    // { path: '/location',      title: 'location',         icon: 'fa fa-map-marker',       class: '' },
    // { path: '/user',          title: 'Shop Owner',       icon: 'fa fa-user-circle-o',    class: '' },

    // { path: '/sales',         title: 'Sales',              icon: 'fa fa-book',             class: '' },

    // { path: '/finance',           title: 'Finance',              icon: 'fa fa-book',             class: '' },

    // { path: '/sales-table',    title: 'Sales Report',       icon: 'fa fa-bar-chart',        class:'' },


    // { path: '/finances-table',    title: 'Finance Report',       icon: 'fa fa-bar-chart',        class:'' }


];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(public userservice:UserService){}

    ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

}
