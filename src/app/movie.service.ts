import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, Response } from './models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }

  getVideos(){
    const page = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    return this.http.get<Response>(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=c24b3064cd7068cfdf5b6026870e5b32&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate%27`);
  }


}
