import { Component, OnInit } from '@angular/core';
import Movie from '../models/Movie';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  singleMovie: Movie;
  popularMovies: Movie;
  upcomingMovies: Movie;
  // inTheatreMovies: Movie;
  topRatedMovies: Movie;
  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data["results"].slice(0, 6);
      this.singleMovie = this.popularMovies[0];
    })

    this.moviesService.getUpcomingMovies().subscribe(data => {
      this.upcomingMovies = data["results"].slice(0, 6);
    })

    this.moviesService.getTopRatedMovies().subscribe(data => {
      this.topRatedMovies = data["results"].slice(0, 6);
    })
  }

}
