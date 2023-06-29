import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  name: string = 'CHARIZARD';
  attributesTypes: string[] = ['FIRE', 'DRAGON'];

  constructor() {}

  ngOnInit(): void {}
}
