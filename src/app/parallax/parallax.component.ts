import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.sass'],
})
export class ParallaxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var image = document.getElementsByClassName('thumbnail-right');
    new simpleParallax(image, { orientation: 'right', scale: 1.6 });
    var image1 = document.getElementsByClassName('thumbnail-left');
    new simpleParallax(image1, { orientation: 'left', scale: 1.6 });
  }
}
