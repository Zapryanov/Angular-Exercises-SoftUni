import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: any;
  currentUserId: number;

  constructor(
    private userService: UserService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.router.params.pipe(
      tap(({ id }) => {
        this.user = null;
        this.currentUserId = +id;
      }),
      switchMap(({ id }) => this.userService.loadUser(id))
    ).subscribe(user => {
      this.user = user;
    })
  }

}
