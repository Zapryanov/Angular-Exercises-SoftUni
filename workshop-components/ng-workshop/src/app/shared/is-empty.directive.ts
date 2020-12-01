import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appIsEmpty]',
  exportAs: 'isEmpty'
})
export class IsEmptyDirective implements OnChanges {

  @Input() someValue: any;

  isEmpty = true;

  constructor() { }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    this.isEmpty = !simpleChanges?.someValue.currentValue || true;
  }

}
