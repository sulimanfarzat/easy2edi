import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  trustedOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: true,
    items: 4,
    margin: 30,
    autoplay: true,
    smartSpeed: 700,
    autoplayTimeout: 6000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      460: {
        items: 2,
        margin: 0
      },
      576: {
        items: 3,
        margin: 20
      },
      992: {
        items: 4,
        margin: 30
      }
    },
    nav: false
  }


}