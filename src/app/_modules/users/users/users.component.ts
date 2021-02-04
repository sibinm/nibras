import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public details: Object = {
    id: 'Users',
    description: 'lorem ipsum'
  }
  public viewMode: string = 'grid';
  public users = [
    {
      name: "lorem",
      desc: "ipsum"
    },
    {
      name: "lorem",
      desc: "ipsum"
    },
    {
      name: "lorem",
      desc: "ipsum"
    },
    {
      name: "lorem",
      desc: "ipsum"
    },
    {
      name: "lorem",
      desc: "ipsum"
    },
    {
      name: "lorem",
      desc: "ipsum"
    },
    {
      name: "lorem",
      desc: "ipsum"
    },
    {
      name: "lorem",
      desc: "ipsum"
    },
    {
      name: "lorem",
      desc: "ipsum"
    }
  ]

  constructor() { }

  ngOnInit(): void { }

  updateViewMode(event) {
    this.viewMode = event;
  }

}
