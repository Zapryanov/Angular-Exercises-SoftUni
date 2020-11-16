import { Component, OnInit } from '@angular/core';
import Movie from '../models/Movie';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  singleMovie: Movie;
  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getAllMovies().subscribe(data => {
      console.log("From component - INSIDE");
      this.popularMovies = data["results"];
      console.log("popular movies " + this.popularMovies)
      console.log(this.popularMovies);

      this.singleMovie = this.popularMovies[0];
    })
  }

}
