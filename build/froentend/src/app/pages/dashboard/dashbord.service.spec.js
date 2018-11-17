"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var dashbord_service_1 = require("./dashbord.service");
describe('DashbordService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(dashbord_service_1.DashbordService);
        expect(service).toBeTruthy();
    });
});
