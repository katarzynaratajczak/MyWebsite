import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fb = '/assets/2.jpg';
  in = '/assets/3.jpg';
  git = '/assets/3.png';
  constructor() { }

  ngOnInit() {
  }

}
