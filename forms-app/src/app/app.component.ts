import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  toggleHighlightHandler() {
    this.isHighlighted = !this.isHighlighted;
  }
}
