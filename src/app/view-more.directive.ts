import { Directive, ElementRef, OnInit, AfterViewInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';

@Directive({
  selector: '[view-more]'
})
export class ViewMoreDirective implements OnInit, AfterViewInit, OnDestroy {
  private element: HTMLInputElement;
  @Input() viewHeight: number;
  @Output() showMore = new EventEmitter<boolean>()
  toggleShowMore = false;
  actualHeight: number;

  constructor(private elRef: ElementRef) {
    //elRef will get a reference to the element where
    //the directive is placed
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    console.log('height equal', this.viewHeight, this.element.offsetHeight);
  }
  ngAfterViewInit() {
    this.actualHeight = this.element.offsetHeight + 10;
    if (this.element.offsetHeight > this.viewHeight) {
      let btnName = 'view More...'
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
      this.toggleEventOnViewMore(span)
      setTimeout(() => {
        this.showMore.emit(true);
      }, 1000)
    }
    else {
      console.log('height not equal');
      this.showMore.emit(false);
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
      } else {
        console.log('viewmore');
        document.getElementById('text_view').innerHTML = 'view less...';
        this.element.classList.add("view_more");
        this.toggleShowMore = !this.toggleShowMore;
      }
    })
  }

  ngOnDestroy() {
    document.getElementById('style_view_more').remove();
  }
}