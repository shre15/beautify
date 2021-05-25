import { Component, OnInit } from '@angular/core';
import { Carousal_List } from '../types/constants';
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.sass'],
})
export class CarousalComponent implements OnInit {
  public carouselList = Carousal_List;
  constructor() {}

  ngOnInit(): void {}
}
