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
var main_routing_module_1 = require("./main-routing.module");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var profilesettings_component_1 = require("../profilesettings/profilesettings.component");
var dashbord_service_1 = require("../dashboard/dashbord.service");
var forms_1 = require("@angular/forms");
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                main_routing_module_1.MainRoutingModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [dashboard_component_1.DashboardComponent, profilesettings_component_1.ProfilesettingsComponent],
            providers: [dashbord_service_1.DashbordService]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
