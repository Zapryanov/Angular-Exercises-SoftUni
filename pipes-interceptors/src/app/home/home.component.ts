import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  users = [
    {
      name: "Ivan",
      age: 40
    },
    {
      name: "Atanas",
      age: 43
    },
    {
      name: "Vasko",
      age: 7
    }
  ];


  counter: number = 0;

  intervalSubscription: Subscription;

  constructor() {
    this.intervalSubscription = interval(1000).subscribe(() => {this.counter++})
  }

  // calculateAvgAge(users: any[]): number {
  //   return users.reduce((acc, cur) => acc += cur.age, 0) / users.length;
  // }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
