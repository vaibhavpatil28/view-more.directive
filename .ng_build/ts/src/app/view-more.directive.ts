import { Directive, ElementRef, OnInit, Output, Input, EventEmitter, OnDestroy, AfterViewChecked, SimpleChanges } from '@angular/core';
import { ViewMoreService } from './view-more.service';

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
  repeatedStructure: NodeListOf<Element>;
  viewRepeatedCount: number;
  elementIDValue: any;
  constructor(private elRef: ElementRef, private viewMoreService: ViewMoreService) {
    //elRef will get a reference to the element where
    //the directive is placed
    this.element = elRef.nativeElement;
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes',changes);
  }
  ngOnInit() {
    console.log('height equal', this.viewHeight, this.element.offsetHeight);
    this.repeatedStructure = document.querySelectorAll('[view-more]');
    if (!!this.repeatedStructure && this.repeatedStructure.length > 0) {
      this.viewRepeatedCount = this.repeatedStructure.length;
      this.viewMoreService.classUniqueCount = this.viewRepeatedCount
      console.log('this.viewRepeatedCount', this.viewRepeatedCount);
      // this.repeatedStructure.forEach((element, index) => {
       
      // })
      for (let index = 0; index < this.repeatedStructure.length; index++) {
        this.elementIDValue = this.repeatedStructure[index].getAttribute('id');
        console.log('this.elementIDValue', this.elementIDValue);
        if (!this.elementIDValue) {
          this.repeatedStructure[index].setAttribute(`id`, `${index+1}`);
        }
        
      }

    }
    console.log('no of elements', document.querySelectorAll('[view-more]'));
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
      span.setAttribute(`id`, `text_view_${this.elementIDValue}`);
      span.setAttribute('style', 'cursor:pointer;')
      this.element.parentNode.insertBefore(para, this.element.nextSibling)
      this.toggleEventOnViewMore( document.getElementById(`text_view_${this.elementIDValue}`));
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
    createdStyleTag.textContent = `.view_more_${this.elementIDValue} {
      height: ${this.actualHeight }px !important;
    }  
`;
    this.element.style.animationDirection = "";
    // document.body.appendChild(createdStyleTag);
    this.element.appendChild(createdStyleTag);
    element.addEventListener('click', () => {
      console.log('element',element);
      
      if (this.toggleShowMore) {
        console.log('viewless');
        this.element.classList.remove(`view_more_${this.elementIDValue}`);
        document.getElementById(`text_view_${this.elementIDValue}`).innerHTML = 'view more...';
        this.toggleShowMore = !this.toggleShowMore;
        this.showMore.emit(false);
      } else {
        console.log('viewmore');
        document.getElementById(`text_view_${this.elementIDValue}`).innerHTML = 'view less...';
        this.element.classList.add(`view_more_${this.elementIDValue}`);
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