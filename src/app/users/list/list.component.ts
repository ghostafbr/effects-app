import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  public users: any[] = [];
  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( resp => {
      console.log(resp);
      this.users = resp;
    });
  }

}
