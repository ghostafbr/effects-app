import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {loadUsers} from "../../store/actions";

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
  loading: boolean = false;
  error: any = null;
  constructor( private store: Store<AppState> ) { }

  ngOnInit( ): void {

    this.store.select('users').subscribe( ({users, loading, error}) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    } );

    this.store.dispatch( loadUsers() );
/*  this.userService.getUsers().subscribe( resp => {
      console.log(resp);
      this.users = resp;
    });*/
  }

}
