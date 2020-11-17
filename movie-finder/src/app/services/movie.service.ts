import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = "https://api.themoviedb.org/3/movie";
// const IN_THEATERS = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = "?api_key=368877cb4c24e49b3cff93867322f9e5";

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL +  "/popular" + API_KEY);
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + "/upcoming" + API_KEY);
  }

  // getInTheatreMovies(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(IN_THEATERS + API_KEY + "&with_release_type=2|3");
  // }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + "/top_rated" + API_KEY);
  }
}
