import { ElementRef, OnInit, AfterViewInit, EventEmitter, OnDestroy } from '@angular/core';
export declare class ViewMoreDirective implements OnInit, AfterViewInit, OnDestroy {
    private elRef;
    private element;
    viewHeight: number;
    showMore: EventEmitter<boolean>;
    toggleShowMore: boolean;
    actualHeight: number;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggleEventOnViewMore(element: HTMLElement): void;
    ngOnDestroy(): void;
}
