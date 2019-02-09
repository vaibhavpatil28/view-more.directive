(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/platform-browser', '@angular/core'], factory) :
	(factory((global['view-more'] = {}),global.ng.platformBrowser,global.ng.core));
}(this, (function (exports,platformBrowser,core) { 'use strict';

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    AppComponent.prototype.showMore = function (event) {
        console.log('event', event);
    };
    return AppComponent;
}());
AppComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-root',
                template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-6\" style=\"width:50%;\">\n       \n          \n              <p view-more viewHeight=\"55\" (showMore)=\"showMore($event)\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae risus vel erat malesuada viverra non nec velit. Fusce varius eleifend augue in tincidunt. Integer bibendum risus nulla, et consequat lorem aliquet quis. Integer dictum varius orci ut cursus. Nam et commodo neque. Cras maximus commodo tincidunt. Suspendisse tempus sit amet neque quis tempus. Curabitur posuere lectus ex, sed pharetra tortor iaculis at. Aenean tellus tellus, tincidunt a tristique non, porttitor eu ipsum. Aliquam erat volutpat. Suspendisse potenti. Integer vehicula ligula nec lectus pharetra, et vestibulum turpis gravida. Donec vitae dui diam.\n              </p>\n               <p view-more viewHeight=\"55\" (showMore)=\"showMore($event)\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae risus vel erat malesuada viverra non nec velit. Fusce varius eleifend augue in tincidunt. Integer bibendum risus nulla, et consequat lorem aliquet quis. Integer dictum varius orci ut cursus. Nam et commodo neque. Cras maximus commodo tincidunt. Suspendisse tempus sit amet neque quis tempus. Curabitur posuere lectus ex, sed pharetra tortor iaculis at. Aenean tellus tellus, tincidunt a tristique non, porttitor eu ipsum. Aliquam erat volutpat. Suspendisse potenti. Integer vehicula ligula nec lectus pharetra, et vestibulum turpis gravida. Donec vitae dui diam.\n          \n                Nam accumsan urna placerat facilisis sagittis. Proin sit amet consequat tellus. Nam molestie at risus vitae tristique. Phasellus aliquet pharetra molestie. Duis hendrerit metus et viverra congue. Sed eu mauris nec ipsum ullamcorper pharetra. Phasellus quis lorem malesuada odio placerat blandit. Morbi aliquam bibendum felis, sed placerat massa ullamcorper eget. Nam aliquet tempus orci sit amet tempor. Etiam massa magna, pulvinar vel libero in, cursus eleifend est. Quisque fringilla blandit condimentum. Nulla elit dui, fermentum vitae turpis eu, mattis fringilla dui. Donec luctus suscipit nunc vitae elementum. Integer vel euismod turpis. Suspendisse eu faucibus purus.\n            \n                Curabitur sodales enim ac sollicitudin fermentum. Donec non mauris at nisi tempus dapibus nec in justo. Mauris vel mi sollicitudin, ornare nibh eget, cursus augue. Vivamus tristique enim vitae molestie placerat. Curabitur pretium tortor ut neque viverra, a dapibus turpis blandit. Donec ultrices facilisis venenatis. Vivamus auctor nibh eget leo condimentum venenatis. Nulla facilisi. Nulla id neque erat. Ut imperdiet aliquet vulputate. Curabitur erat risus, lacinia vel ornare mattis, porta quis orci. Nam vitae tincidunt nulla. Maecenas mollis laoreet turpis, a lacinia sem feugiat vel. Fusce lobortis libero nec molestie accumsan.\n              </p>\n        </div>\n      </div>\n    </div>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
AppComponent.ctorParameters = function () { return []; };
var ViewMoreService = /** @class */ (function () {
    function ViewMoreService() {
        this.classUniqueCount = 0;
    }
    return ViewMoreService;
}());
ViewMoreService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
ViewMoreService.ctorParameters = function () { return []; };
var ViewMoreDirective = /** @class */ (function () {
    /**
     * @param {?} elRef
     * @param {?} viewMoreService
     */
    function ViewMoreDirective(elRef, viewMoreService) {
        this.elRef = elRef;
        this.viewMoreService = viewMoreService;
        this.showMore = new core.EventEmitter();
        this.toggleShowMore = false;
        this.isInsertedViewMoreBtn = false;
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ViewMoreDirective.prototype.ngOnChanges = function (changes) {
        // console.log('changes',changes);
    };
    /**
     * @return {?}
     */
    ViewMoreDirective.prototype.ngOnInit = function () {
        console.log('height equal', this.viewHeight, this.element.offsetHeight);
        this.repeatedStructure = document.querySelectorAll('[view-more]');
        if (!!this.repeatedStructure && this.repeatedStructure.length > 0) {
            this.viewRepeatedCount = this.repeatedStructure.length;
            this.viewMoreService.classUniqueCount = this.viewRepeatedCount;
            console.log('this.viewRepeatedCount', this.viewRepeatedCount);
            // this.repeatedStructure.forEach((element, index) => {
            // })
            for (var /** @type {?} */ index = 0; index < this.repeatedStructure.length; index++) {
                this.elementIDValue = this.repeatedStructure[index].getAttribute('id');
                console.log('this.elementIDValue', this.elementIDValue);
                if (!this.elementIDValue) {
                    this.repeatedStructure[index].setAttribute("id", "" + (index + 1));
                }
            }
        }
        console.log('no of elements', document.querySelectorAll('[view-more]'));
    };
    /**
     * @return {?}
     */
    ViewMoreDirective.prototype.ngAfterViewChecked = function () {
        this.actualHeight = this.element.offsetHeight + 10;
        if (!this.isInsertedViewMoreBtn && (this.element.offsetHeight > this.viewHeight)) {
            var /** @type {?} */ btnName = 'view More...';
            console.log('height equal');
            var /** @type {?} */ para = document.createElement("p");
            var /** @type {?} */ span = document.createElement("span");
            var /** @type {?} */ textNode = document.createTextNode("" + btnName);
            span.appendChild(textNode);
            para.appendChild(span);
            para.setAttribute("style", "text-align: right;");
            span.setAttribute("id", "text_view_" + this.elementIDValue);
            span.setAttribute('style', 'cursor:pointer;');
            this.element.parentNode.insertBefore(para, this.element.nextSibling);
            this.toggleEventOnViewMore(document.getElementById("text_view_" + this.elementIDValue));
            this.isInsertedViewMoreBtn = true;
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    ViewMoreDirective.prototype.toggleEventOnViewMore = function (element) {
        var _this = this;
        this.element.setAttribute("style", "overflow: hidden;\n    height: " + this.viewHeight + "px;\n    transition: height 1s ease;\n    ");
        var /** @type {?} */ createdStyleTag;
        createdStyleTag = document.createElement("style");
        createdStyleTag.setAttribute("id", "style_view_more");
        createdStyleTag.textContent = ".view_more_" + this.elementIDValue + " {\n      height: " + this.actualHeight + "px !important;\n    }  \n";
        this.element.style.animationDirection = "";
        // document.body.appendChild(createdStyleTag);
        this.element.appendChild(createdStyleTag);
        element.addEventListener('click', function () {
            console.log('element', element);
            if (_this.toggleShowMore) {
                console.log('viewless');
                _this.element.classList.remove("view_more_" + _this.elementIDValue);
                document.getElementById("text_view_" + _this.elementIDValue).innerHTML = 'view more...';
                _this.toggleShowMore = !_this.toggleShowMore;
                _this.showMore.emit(false);
            }
            else {
                console.log('viewmore');
                document.getElementById("text_view_" + _this.elementIDValue).innerHTML = 'view less...';
                _this.element.classList.add("view_more_" + _this.elementIDValue);
                _this.toggleShowMore = !_this.toggleShowMore;
                _this.showMore.emit(true);
            }
        });
    };
    /**
     * @return {?}
     */
    ViewMoreDirective.prototype.ngOnDestroy = function () {
        if (document.getElementById('style_view_more')) {
            document.getElementById('style_view_more').remove();
        }
    };
    return ViewMoreDirective;
}());
ViewMoreDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[view-more]'
            },] },
];
/**
 * @nocollapse
 */
ViewMoreDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: ViewMoreService, },
]; };
ViewMoreDirective.propDecorators = {
    'viewHeight': [{ type: core.Input },],
    'showMore': [{ type: core.Output },],
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    AppComponent,
                    ViewMoreDirective
                ],
                imports: [
                    platformBrowser.BrowserModule
                ],
                exports: [ViewMoreDirective],
                providers: [ViewMoreService],
                bootstrap: [AppComponent]
            },] },
];
/**
 * @nocollapse
 */
AppModule.ctorParameters = function () { return []; };

exports.ViewMoreDirectiveModule = AppModule;
exports.ɵa = AppComponent;
exports.ɵb = ViewMoreDirective;
exports.ɵc = ViewMoreService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=view-more.umd.js.map
