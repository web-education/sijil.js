import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { S5lComponent } from './components';
import { TranslatePipe } from './pipes/translate.pipe';
import { HttpRequireService, RequireService, BundlesService, SijilOpts, defaultSijilOpts, Parser, FragmentsParser } from './services/index';
import './rxjs-includes';
var SijilModule = (function () {
    function SijilModule() {
    }
    SijilModule.forRoot = function (require, parser, options) {
        return {
            ngModule: SijilModule,
            providers: [
                { provide: BundlesService, useClass: BundlesService, deps: [RequireService, Parser, SijilOpts] },
                { provide: RequireService, useClass: require || HttpRequireService },
                { provide: Parser, useClass: parser || FragmentsParser },
                { provide: SijilOpts, useValue: options || defaultSijilOpts }
            ]
        };
    };
    SijilModule.forChild = function () {
        return {
            ngModule: SijilModule,
            providers: []
        };
    };
    SijilModule.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpClientModule],
                    declarations: [S5lComponent, TranslatePipe],
                    providers: [],
                    exports: [S5lComponent, TranslatePipe]
                },] },
    ];
    SijilModule.ctorParameters = function () { return []; };
    return SijilModule;
}());
export { SijilModule };
//# sourceMappingURL=sijil.module.js.map