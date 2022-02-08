import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  carte: String[] = [];
  
  constructor(private information: String) { }

  ngOnInit(): void {
    this.carte.push(this.information);
  }

}
