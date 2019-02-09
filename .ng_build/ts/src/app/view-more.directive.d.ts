import { ElementRef, OnInit, EventEmitter, OnDestroy, AfterViewChecked, SimpleChanges } from '@angular/core';
import { ViewMoreService } from './view-more.service';
export declare class ViewMoreDirective implements OnInit, AfterViewChecked, OnDestroy {
    private elRef;
    private viewMoreService;
    private element;
    viewHeight: number;
    showMore: EventEmitter<boolean>;
    toggleShowMore: boolean;
    actualHeight: number;
    private isInsertedViewMoreBtn;
    repeatedStructure: NodeListOf<Element>;
    viewRepeatedCount: number;
    elementIDValue: any;
    constructor(elRef: ElementRef, viewMoreService: ViewMoreService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    toggleEventOnViewMore(element: HTMLElement): void;
    ngOnDestroy(): void;
}
