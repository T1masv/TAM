import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string = "";
  @Input() description: string ="";
  // carte: Map<String,String>;
  
  // constructor() { //private information: Map<String,String>
  //   this.carte = new Map;
  // }

  ngOnInit(): void {
    // this.carte = new Map;
    // console.log(this.title);
  }
}
