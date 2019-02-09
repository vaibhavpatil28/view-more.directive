import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewMoreDirective } from './view-more.directive';
import { ViewMoreService } from './view-more.service';
export class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AppComponent,
                    ViewMoreDirective
                ],
                imports: [
                    BrowserModule
                ],
                exports: [ViewMoreDirective],
                providers: [ViewMoreService],
                bootstrap: [AppComponent]
            },] },
];
/**
 * @nocollapse
 */
AppModule.ctorParameters = () => [];
function AppModule_tsickle_Closure_declarations() {
    /** @type {?} */
    AppModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AppModule.ctorParameters;
}
//# sourceMappingURL=app.module.js.map