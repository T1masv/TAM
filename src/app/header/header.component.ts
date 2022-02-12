import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks: any[];

  constructor() { this.navLinks = [
    {
      label: 'Menu 1',
      link: '',
      index: 0
    }, {
      label: 'Menu 2',
      link: '',
      index: 1
    }, {
      label: 'Votre compte',
      link: '',
      index: 2
    }
  ]; 
  }
  
  ngOnInit(): void {
  }

}


