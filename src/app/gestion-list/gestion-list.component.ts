import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-list',
  templateUrl: './gestion-list.component.html',
  styleUrls: ['./gestion-list.component.css']
})
export class GestionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videos: Array<String> = ["Test1", "Test2", "Test3"];
 
  // Juste à remplacer le type sting par un type carde ou video
  addVideo(video : String) {
    this.videos.push(video + "New Element");
  }

  delVideo(video : String) {
    //delete this.videos.indexOf(video);
    var indice = this.videos.indexOf(video);
    this.videos.splice(indice,1);
  }

  //TODO trier les vidéos en fonction de leur genre
  trierVideo(gerne : String) {

  }

}

