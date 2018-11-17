"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var master_routing_module_1 = require("./master-routing.module");
var products_component_1 = require("./products/products.component");
var brands_component_1 = require("./brands/brands.component");
var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                master_routing_module_1.MasterRoutingModule
            ],
            declarations: [products_component_1.ProductsComponent, brands_component_1.BrandsComponent]
        })
    ], MasterModule);
    return MasterModule;
}());
exports.MasterModule = MasterModule;
