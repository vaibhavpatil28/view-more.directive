import { ElementRef, OnInit, EventEmitter, OnDestroy, AfterViewChecked, SimpleChanges } from '@angular/core';
export declare class ViewMoreDirective implements OnInit, AfterViewChecked, OnDestroy {
    private elRef;
    private element;
    viewHeight: number;
    showMore: EventEmitter<boolean>;
    toggleShowMore: boolean;
    actualHeight: number;
    private isInsertedViewMoreBtn;
    constructor(elRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    toggleEventOnViewMore(element: HTMLElement): void;
    ngOnDestroy(): void;
}
