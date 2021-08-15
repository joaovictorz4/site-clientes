import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-text-one',
  templateUrl: './icon-text-one.component.html',
  styleUrls: ['./icon-text-one.component.css']
})
export class IconTextOneComponent implements OnInit {

  @Input() info;

  constructor() { }

  ngOnInit(): void {
  }

}
