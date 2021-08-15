import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-column',
  templateUrl: './menu-column.component.html',
  styleUrls: ['./menu-column.component.css']
})
export class MenuColumnComponent implements OnInit {

  @Input() column;


  constructor() { }

  ngOnInit(): void {
  }

}
