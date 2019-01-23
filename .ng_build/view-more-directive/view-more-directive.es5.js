import { Component, Directive, ElementRef, EventEmitter, Input, NgModule, Output } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: "\n    <!--The content below is only a placeholder and can be replaced.-->\n    <div style=\"text-align:center\">\n      <h1>\n        Welcome to {{ title }}!\n      </h1>\n      <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    </div>\n    <h2>Here are some links to help you start: </h2>\n    <ul>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n      </li>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n      </li>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n      </li>\n    </ul>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
AppComponent.ctorParameters = function () { return []; };
var ViewMoreDirective = /** @class */ (function () {
    /**
     * @param {?} elRef
     */
    function ViewMoreDirective(elRef) {
        this.elRef = elRef;
        this.showMore = new EventEmitter();
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
            span.setAttribute("id", "text_view");
            span.setAttribute('style', 'cursor:pointer;');
            this.element.parentNode.insertBefore(para, this.element.nextSibling);
            this.toggleEventOnViewMore(span);
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
        createdStyleTag.textContent = ".view_more {\n      height: " + this.actualHeight + "px !important;\n    }  \n";
        this.element.style.animationDirection = "";
        // document.body.appendChild(createdStyleTag);
        this.element.appendChild(createdStyleTag);
        element.addEventListener('click', function () {
            if (_this.toggleShowMore) {
                console.log('viewless');
                _this.element.classList.remove("view_more");
                document.getElementById('text_view').innerHTML = 'view more...';
                _this.toggleShowMore = !_this.toggleShowMore;
                _this.showMore.emit(false);
            }
            else {
                console.log('viewmore');
                document.getElementById('text_view').innerHTML = 'view less...';
                _this.element.classList.add("view_more");
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
    { type: Directive, args: [{
                selector: '[view-more]'
            },] },
];
/**
 * @nocollapse
 */
ViewMoreDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
ViewMoreDirective.propDecorators = {
    'viewHeight': [{ type: Input },],
    'showMore': [{ type: Output },],
};
// import { BrowserModule } from '@angular/platform-browser';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AppComponent,
                    ViewMoreDirective
                ],
                imports: [],
                exports: [ViewMoreDirective],
                providers: [],
                bootstrap: [AppComponent]
            },] },
];
/**
 * @nocollapse
 */
AppModule.ctorParameters = function () { return []; };
/*
 * Public API Surface of view-more-directive
 */
/**
 * Generated bundle index. Do not edit.
 */
export { AppModule as ViewMoreDirectiveModule, AppComponent as ɵa, ViewMoreDirective as ɵb };
//# sourceMappingURL=view-more-directive.es5.js.map
