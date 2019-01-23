import { Directive, ElementRef, OnInit, Output, Input, EventEmitter, OnDestroy, AfterViewChecked, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[view-more]'
})
export class ViewMoreDirective implements OnInit, AfterViewChecked, OnDestroy {
  private element: HTMLInputElement;
  @Input() viewHeight: number;
  @Output() showMore = new EventEmitter<boolean>()
  toggleShowMore = false;
  actualHeight: number;
  private isInsertedViewMoreBtn = false;
  constructor(private elRef: ElementRef) {
    //elRef will get a reference to the element where
    //the directive is placed
    this.element = elRef.nativeElement;
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes',changes);
  }
  ngOnInit() {
    console.log('height equal', this.viewHeight, this.element.offsetHeight);
  }
  ngAfterViewChecked() {
    this.actualHeight = this.element.offsetHeight + 10;
    if (!this.isInsertedViewMoreBtn && (this.element.offsetHeight > this.viewHeight)) {
      let btnName = 'view More...';
      console.log('height equal');

      let para = document.createElement("p");
      let span = document.createElement("span");
      let textNode = document.createTextNode(`${ btnName }`);
      span.appendChild(textNode);
      para.appendChild(span);
      para.setAttribute(`style`, `text-align: right;`);
      span.setAttribute(`id`, `text_view`);
      span.setAttribute('style', 'cursor:pointer;')
      this.element.parentNode.insertBefore(para, this.element.nextSibling)
      this.toggleEventOnViewMore(span);
      this.isInsertedViewMoreBtn = true;
    }
  }
  toggleEventOnViewMore(element: HTMLElement) {
    this.element.setAttribute(
      `style`,
      `overflow: hidden;
    height: ${this.viewHeight }px;
    transition: height 1s ease;
    `
    );
    let createdStyleTag: HTMLStyleElement;
    createdStyleTag = document.createElement("style");
    createdStyleTag.setAttribute(`id`, `style_view_more`);
    createdStyleTag.textContent = `.view_more {
      height: ${this.actualHeight }px !important;
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
        this.showMore.emit(false);
      } else {
        console.log('viewmore');
        document.getElementById('text_view').innerHTML = 'view less...';
        this.element.classList.add("view_more");
        this.toggleShowMore = !this.toggleShowMore;
        this.showMore.emit(true);
      }
    })
  }

  ngOnDestroy() {
    if (document.getElementById('style_view_more')) {
      document.getElementById('style_view_more').remove();
    }
  }
}