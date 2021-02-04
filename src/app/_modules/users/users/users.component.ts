import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public details: Object;
  public data;
  public viewMode: string = 'table';
  public isDataLoaded: boolean = false;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  // Fetch a list of users
  // Name, website an email values are used instead of joining date and designation
  fetchUsers() {
    this.dataService.getUsers().subscribe(data => {
      this.data = data;
      this.isDataLoaded = true;

      this.details = {
        "id": 'Users',
        "description": 'lorem ipsum',
        "count": this.data.length
      }
    })
  }

  // To toggle grid and table view
  updateViewMode(event) {
    this.viewMode = event;
  }

}
