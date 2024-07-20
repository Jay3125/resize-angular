import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appResizable]',
  standalone: true,
})
export class ResizableDirective implements OnInit {
  private element: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement as HTMLElement;
  }

  ngAfterViewInit() {
    this.element.style.resize = 'both';
    this.element.style.border = '1px solid';
    this.element.style.overflow = 'auto';
    this.element.style.padding = '10px';
    this.element.style.height = 'auto'
  }

  @HostListener('mouseover') onMouseEnter() {
    // this.highlight('gray');
    // this.element.style.color = '#fff';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.highlight('');
    // this.element.style.color = '#000';
  }

  private highlight(color: string) {
    this.element.style.backgroundColor = color;
  }
}
