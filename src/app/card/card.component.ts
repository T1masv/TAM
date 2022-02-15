import { Component, OnInit, Input } from '@angular/core';
import { VideoComponent } from '../video/video.component';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers : [VideoComponent]
})
export class CardComponent implements OnInit {
  @Input() title: string = "";
  @Input() description: string ="";
  @Input() myVideo: Movie = {};
  
  constructor() {  }

  ngOnInit(): void {
  }

  displayVideo(): void {
    console.log("ok")
  }

}
