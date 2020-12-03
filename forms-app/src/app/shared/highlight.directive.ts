import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})
export class HighlightDirective implements OnChanges {

  @Input() color = "green";
  @Input() appHighlight = false;

  @HostBinding("class.binding-class") get isHighlighted() {
    return this.appHighlight;
  }

  @HostListener("mouseenter") onMouseEnter() {
    if (this.appHighlight) {return;}
    this.appHighlight = !this.appHighlight;
    this.highlight();
  }

  @HostListener("mouseleave") onMouseLeave() {
    if (!this.appHighlight) {return;}
    this.appHighlight = !this.appHighlight;
    this.highlight();
  }

  constructor(
    private render: Renderer2,  // Ivy
    private elementRef: ElementRef
    ) { }

  highlight() {
    this.render.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      this.appHighlight ? this.color : "red"
      )
  }

  ngOnChanges(): void {
    this.highlight();
  }

}
