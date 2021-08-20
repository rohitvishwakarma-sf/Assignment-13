import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: User[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAll().then(u => {
      this.users = u;
    })
  }
  onDelete(index: number) {
    this.users.splice(index, 1);
  }
}
