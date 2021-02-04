import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public details = {
    "id": 'Home',
    "description": 'Home page Description'
  }

  // Dummy values are used for overview count cards
  public overviews = [
    {
      value: 345,
      label: "Total Orders",
      icon: "shopping_cart"
    },
    {
      value: 267,
      label: "Total Expenses",
      icon: "account_balance_wallet"
    },
    {
      value: 500,
      label: "Total Revenue",
      icon: "article"
    },
    {
      value: 100,
      label: "New Users",
      icon: "perm_identity"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
