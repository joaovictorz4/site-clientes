import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-header-icon',
  templateUrl: './card-header-icon.component.html',
  styleUrls: ['./card-header-icon.component.css']
})
export class CardHeaderIconComponent implements OnInit {

  @Input() card;

  constructor() { }

  ngOnInit(): void {
  }

}
