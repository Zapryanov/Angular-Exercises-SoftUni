import { Component, OnInit } from '@angular/core';
import Movie from '../models/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Movie[];
  constructor(private moviesService: MovieService) { }

  ngOnInit(): void {
    console.log("From Component---------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    this.moviesService.getAllMovies().subscribe(data => {
      this.popularMovies = data;
      console.log("popular movies " + this.popularMovies)
    })
  }

}
