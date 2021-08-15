import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-offers',
  templateUrl: './card-offers.component.html',
  styleUrls: ['./card-offers.component.css']
})
export class CardOffersComponent implements OnInit {

  @Input() card;

  constructor() { }

  ngOnInit(): void {
    this.card.buttonText = "Confira"
  }

}
