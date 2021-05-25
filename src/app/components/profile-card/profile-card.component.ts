import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.sass'],
})
export class ProfileCardComponent implements OnInit {
  @Output('okClick') okClickEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
