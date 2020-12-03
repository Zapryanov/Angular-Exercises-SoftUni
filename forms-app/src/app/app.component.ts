import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HighlightDirective } from './shared/highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild("paragraphHighlight") pDirective: HighlightDirective;

  isHighlighted = false;

  users = [
    {
      name: "Ivan",
      age: 23
    },
    {
      name: "Petya",
      age: 20
    },
    {
      name: "Lili",
      age: 21
    }
  ];

  ngAfterViewInit(): void {
    console.log(this.pDirective);
  }

  toggleHighlightHandler(p: HighlightDirective) {
    console.log(p)
    this.isHighlighted = !this.isHighlighted;
  }
}
