import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() users?: any[];

constructor(
  private apiService: ApiService,
) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  } 

  getUsers() {
  }

}
