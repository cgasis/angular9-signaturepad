import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var Angular9SignaturepadService = /** @class */ (function () {
    function Angular9SignaturepadService() {
    }
    Angular9SignaturepadService.ɵprov = ɵɵdefineInjectable({ factory: function Angular9SignaturepadService_Factory() { return new Angular9SignaturepadService(); }, token: Angular9SignaturepadService, providedIn: "root" });
    Angular9SignaturepadService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], Angular9SignaturepadService);
    return Angular9SignaturepadService;
}());

var Angular9SignaturepadComponent = /** @class */ (function () {
    function Angular9SignaturepadComponent() {
    }
    Angular9SignaturepadComponent.prototype.ngOnInit = function () {
    };
    Angular9SignaturepadComponent = __decorate([
        Component({
            selector: 'lib-angular9-signaturepad',
            template: "\n    <p>\n      angular9-signaturepad works!\n    </p>\n  "
        })
    ], Angular9SignaturepadComponent);
    return Angular9SignaturepadComponent;
}());

var Angular9SignaturepadModule = /** @class */ (function () {
    function Angular9SignaturepadModule() {
    }
    Angular9SignaturepadModule = __decorate([
        NgModule({
            declarations: [Angular9SignaturepadComponent],
            imports: [],
            exports: [Angular9SignaturepadComponent]
        })
    ], Angular9SignaturepadModule);
    return Angular9SignaturepadModule;
}());

/*
 * Public API Surface of angular9-signaturepad
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Angular9SignaturepadComponent, Angular9SignaturepadModule, Angular9SignaturepadService };
//# sourceMappingURL=angular9-signaturepad.js.map
