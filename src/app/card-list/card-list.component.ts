import { Component, Input, OnInit } from '@angular/core';
import { card } from '../home-page/card';
import simpleParallax from 'simple-parallax-js';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass'],
})
export class CardListComponent implements OnInit {
  @Input() cardList!: card[];
  constructor() {}

  ngOnInit(): void {}
}
