import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  private subject = new Subject();

  observable: string;

  constructor() { }

  ngOnInit(): void {
    this.subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    this.subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    })

    let observable = from([1, 2, 3]);
    observable.subscribe(this.subject);
  }

}
