import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category;

  constructor() { }

  ngOnInit(): void {
  }

}
