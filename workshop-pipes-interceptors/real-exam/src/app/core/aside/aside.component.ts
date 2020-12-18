import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Input() date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  handleTimer() {
    const currentdate = new Date();
    const datetime = "DATE: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear()

    return datetime;
  }

}
