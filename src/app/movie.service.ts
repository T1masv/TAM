import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }

  getVideos(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=c24b3064cd7068cfdf5b6026870e5b32&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
  }
}
