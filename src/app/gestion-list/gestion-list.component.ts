import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-gestion-list',
  templateUrl: './gestion-list.component.html',
  styleUrls: ['./gestion-list.component.css'],
  providers : [CardComponent]
})
export class GestionListComponent implements OnInit {
  test : CardComponent = new CardComponent(); // Juste pour le test
  constructor() { }

  ngOnInit(): void {
  }

  videos: Array<CardComponent> = [this.test];
 
  // Juste à remplacer le type sting par un type carde ou video
  addVideo(video : CardComponent) {
    this.videos.push(video);
  }

  delVideo(video : CardComponent) {
    //delete this.videos.indexOf(video);
    var indice = this.videos.indexOf(video);
    console.log(indice);
    this.videos.splice(indice,1);
  }

  //TODO trier les vidéos en fonction de leur genre
  trierVideo(gerne : String) {

  }

}

