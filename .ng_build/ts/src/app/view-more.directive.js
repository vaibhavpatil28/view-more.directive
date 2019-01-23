import { Directive, ElementRef, Output, Input, EventEmitter } from '@angular/core';
export class ViewMoreDirective {
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
function ViewMoreDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ViewMoreDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ViewMoreDirective.ctorParameters;
    /** @type {?} */
    ViewMoreDirective.propDecorators;
    /** @type {?} */
    ViewMoreDirective.prototype.element;
    /** @type {?} */
    ViewMoreDirective.prototype.viewHeight;
    /** @type {?} */
    ViewMoreDirective.prototype.showMore;
    /** @type {?} */
    ViewMoreDirective.prototype.toggleShowMore;
    /** @type {?} */
    ViewMoreDirective.prototype.actualHeight;
    /** @type {?} */
    ViewMoreDirective.prototype.elRef;
}
//# sourceMappingURL=view-more.directive.js.map