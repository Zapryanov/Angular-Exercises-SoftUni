import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input("movie")
  movie: Movie;

  @Output()
  clickButtonEmitter: EventEmitter<number> = new EventEmitter();

  imagePath: string;

  constructor() { }

  ngOnInit() {
    this.imagePath = "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
  }

  clickBtn() {
    console.log("Click btn with id - " + this.movie.id)
    this.clickButtonEmitter.emit(this.movie.id);
  }

}
