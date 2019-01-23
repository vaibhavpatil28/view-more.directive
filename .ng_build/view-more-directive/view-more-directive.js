import { BrowserModule } from '@angular/platform-browser';
import { Component, Directive, ElementRef, EventEmitter, Input, NgModule, Output } from '@angular/core';

class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{ title }}!
      </h1>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
AppComponent.ctorParameters = () => [];

class ViewMoreDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.showMore = new EventEmitter();
        this.toggleShowMore = false;
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('height equal', this.viewHeight, this.element.offsetHeight);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.actualHeight = this.element.offsetHeight + 10;
        if (this.element.offsetHeight > this.viewHeight) {
            let /** @type {?} */ btnName = 'view More...';
            console.log('height equal');
            let /** @type {?} */ para = document.createElement("p");
            let /** @type {?} */ span = document.createElement("span");
            let /** @type {?} */ textNode = document.createTextNode(`${btnName}`);
            span.appendChild(textNode);
            para.appendChild(span);
            para.setAttribute(`style`, `text-align: right;`);
            span.setAttribute(`id`, `text_view`);
            span.setAttribute('style', 'cursor:pointer;');
            this.element.parentNode.insertBefore(para, this.element.nextSibling);
            this.toggleEventOnViewMore(span);
            setTimeout(() => {
                this.showMore.emit(true);
            }, 1000);
        }
        else {
            console.log('height not equal');
            this.showMore.emit(false);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    toggleEventOnViewMore(element) {
        this.element.setAttribute(`style`, `overflow: hidden;
    height: ${this.viewHeight}px;
    transition: height 1s ease;
    `);
        let /** @type {?} */ createdStyleTag;
        createdStyleTag = document.createElement("style");
        createdStyleTag.setAttribute(`id`, `style_view_more`);
        createdStyleTag.textContent = `.view_more {
      height: ${this.actualHeight}px !important;
    }  
`;
        this.element.style.animationDirection = "";
        // document.body.appendChild(createdStyleTag);
        this.element.appendChild(createdStyleTag);
        element.addEventListener('click', () => {
            if (this.toggleShowMore) {
                console.log('viewless');
                this.element.classList.remove("view_more");
                document.getElementById('text_view').innerHTML = 'view more...';
                this.toggleShowMore = !this.toggleShowMore;
            }
            else {
                console.log('viewmore');
                document.getElementById('text_view').innerHTML = 'view less...';
                this.element.classList.add("view_more");
                this.toggleShowMore = !this.toggleShowMore;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.getElementById('style_view_more').remove();
    }
}
ViewMoreDirective.decorators = [
    { type: Directive, args: [{
                selector: '[view-more]'
            },] },
];
/**
 * @nocollapse
 */
ViewMoreDirective.ctorParameters = () => [
    { type: ElementRef, },
];
ViewMoreDirective.propDecorators = {
    'viewHeight': [{ type: Input },],
    'showMore': [{ type: Output },],
};

class AppModule {
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
                providers: [],
                bootstrap: [AppComponent]
            },] },
];
/**
 * @nocollapse
 */
AppModule.ctorParameters = () => [];

/*
 * Public API Surface of view-more-directive
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppModule as ViewMoreDirectiveModule, AppComponent as ɵa, ViewMoreDirective as ɵb };
//# sourceMappingURL=view-more-directive.js.map
