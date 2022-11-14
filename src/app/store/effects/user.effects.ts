// @ts-nocheck
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as userAction from '../actions/user.actions';
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {UserService} from "../../services/user.service";


@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private usersService: UserService
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.loadUser),
      mergeMap((action) => this.usersService.getUserById(action.id)
        .pipe(
          map(user => userAction.loadUserSuccess({user})),
          catchError( error => of(userAction.loadUserError({ payload: error })) )
        )
      )
    )
  );

  unSetUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(userAction.unSetUser),
        tap( () => console.log('unSetUser effect'))
      ),
    {dispatch: false}
  );

}
