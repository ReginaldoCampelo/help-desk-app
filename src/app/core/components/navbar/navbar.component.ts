import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hdk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
