import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let Angular9SignaturepadService = class Angular9SignaturepadService {
    constructor() {
    }
};
Angular9SignaturepadService.ɵprov = ɵɵdefineInjectable({ factory: function Angular9SignaturepadService_Factory() { return new Angular9SignaturepadService(); }, token: Angular9SignaturepadService, providedIn: "root" });
Angular9SignaturepadService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], Angular9SignaturepadService);

let Angular9SignaturepadComponent = class Angular9SignaturepadComponent {
    constructor() { }
    ngOnInit() {
    }
};
Angular9SignaturepadComponent = __decorate([
    Component({
        selector: 'lib-angular9-signaturepad',
        template: `
    <p>
      angular9-signaturepad works!
    </p>
  `
    })
], Angular9SignaturepadComponent);

let Angular9SignaturepadModule = class Angular9SignaturepadModule {
};
Angular9SignaturepadModule = __decorate([
    NgModule({
        declarations: [Angular9SignaturepadComponent],
        imports: [],
        exports: [Angular9SignaturepadComponent]
    })
], Angular9SignaturepadModule);

/*
 * Public API Surface of angular9-signaturepad
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Angular9SignaturepadComponent, Angular9SignaturepadModule, Angular9SignaturepadService };
//# sourceMappingURL=angular9-signaturepad.js.map
