import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {
  path: string = "../assets/images/img_poke_logo.png";

  constructor() { }

  ngOnInit(): void {

  }

}
