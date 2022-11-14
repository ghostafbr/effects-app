//@ts-nocheck
import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {AppState} from "../../store/app.reducers";
import {Store} from "@ngrx/store";
import {loadUser, unSetUser} from "../../store/actions";
import {Subscription} from "rxjs";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;
  user: User;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.select('user').subscribe( ({user, isLoading, error}) => {
      this.user = user;
    });

    this.userSubscription = this.router.params.subscribe( ({id}) => {
      this.store.dispatch( loadUser({id}) );
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.store.dispatch(unSetUser());  // Habrá una mejor forma?
  }

}
