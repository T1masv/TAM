import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { VideoComponent } from '../video/video.component';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-gestion-list',
  templateUrl: './gestion-list.component.html',
  styleUrls: ['./gestion-list.component.css'],
  providers : [CardComponent, VideoComponent]
})
export class GestionListComponent implements OnInit {
  test : VideoComponent = new VideoComponent(); // Juste pour le test
  videos : Movie[] = [];
  videos2 : Movie[] = [];


  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    console.log(this.getMovies());
  }


  // Juste à remplacer le type sting par un type carde ou video
  addVideo(video : Movie) {
    console.log(this.videos);
    this.videos.push(video);
  }

  delVideo(video : Movie) {
    //delete this.videos.indexOf(video);
    var indice = this.videos.indexOf(video);
    console.log(indice);
    this.videos.splice(indice,1);
  }

  getMovies2() {
    this.movieService.getVideos().subscribe(res=>res.results.map(x=>this.addVideo(x)));
  }

  getMovies() {
    this.movieService.getVideos().subscribe(res=>res.results.map(x=>this.addVideo(x)));
    // this.videos = res as Movie[];
  }


  //TODO trier les vidéos en fonction de leur genre
  trierVideo(gerne : String) {

  }

}
