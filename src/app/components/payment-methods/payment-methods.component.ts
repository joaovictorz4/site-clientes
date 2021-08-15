import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {

  public payment_methods = [];

  constructor() { }

  ngOnInit(): void {
    this.payment_methods = JSON.parse(localStorage.getItem('payment_methods'));
  }

}
