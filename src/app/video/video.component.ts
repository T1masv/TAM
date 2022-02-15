import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  saisons : Array<String> = [];
  episodes : Array<String> = [];
  description : string = "description...";
  langue : string = "Français";
  constructor() { }

  ngOnInit(): void {
  }

}
