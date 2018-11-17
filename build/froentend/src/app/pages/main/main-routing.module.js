"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var profilesettings_component_1 = require("../profilesettings/profilesettings.component");
var routes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
    },
    {
        path: 'profilesettings',
        component: profilesettings_component_1.ProfilesettingsComponent,
    },
    {
        path: 'master',
        loadChildren: '../master/master.module#MasterModule'
    },
    {
        path: 'transactions',
        loadChildren: '../transactions/transactions.module#TransactionsModule'
    },
    {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsModule'
    },
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());
exports.MainRoutingModule = MainRoutingModule;
