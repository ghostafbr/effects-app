// @ts-nocheck
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as usersActions from '../actions/users.actions';
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {UserService} from "../../services/user.service";


@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private usersService: UserService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      tap( data => console.log('effect tap', data) ),
      mergeMap(() => this.usersService.getUsers()
        .pipe(
          map( users => usersActions.loadUsersSuccess({ users }) ),
          catchError( error => of(usersActions.loadUsersError({ payload: error })) )
        )
      )
    )
  );

}
