import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "?api_key=368877cb4c24e49b3cff93867322f9e5";

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL +  "/popular" + API_KEY);
  }
}
// const API_KEY = "&api_key=f0afdcb539873fbfedd62017b3dec268";
