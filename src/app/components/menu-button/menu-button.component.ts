import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  @Input() button;

  constructor() { }

  ngOnInit(): void {
  }

}
