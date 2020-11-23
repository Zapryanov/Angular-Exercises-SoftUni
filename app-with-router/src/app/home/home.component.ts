import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  counter = 0;
  intervalSubscribtion: Subscription;

  constructor() {
    this.intervalSubscribtion = interval(1000).subscribe(() => { this.counter++; });
  }

  ngOnDestroy(): void {
    this.intervalSubscribtion.unsubscribe();
  }

}
