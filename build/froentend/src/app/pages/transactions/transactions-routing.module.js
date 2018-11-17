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
var sales_component_1 = require("./sales/sales.component");
var purchase_component_1 = require("./purchase/purchase.component");
var routes = [
    {
        path: 'sales',
        component: sales_component_1.SalesComponent,
    },
    {
        path: 'purchase',
        component: purchase_component_1.PurchaseComponent,
    },
];
var TransactionsRoutingModule = /** @class */ (function () {
    function TransactionsRoutingModule() {
    }
    TransactionsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TransactionsRoutingModule);
    return TransactionsRoutingModule;
}());
exports.TransactionsRoutingModule = TransactionsRoutingModule;
