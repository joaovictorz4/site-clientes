import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-one',
  templateUrl: './button-one.component.html',
  styleUrls: ['./button-one.component.css']
})
export class ButtonOneComponent implements OnInit {

  @Input() button;



  constructor() { }

  ngOnInit(): void {
  }

}
