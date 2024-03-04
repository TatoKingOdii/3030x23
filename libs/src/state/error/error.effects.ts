import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from "rxjs";
import {ToastUiService} from "../../../../challenge/src/app/core/toast-ui-service/toast-ui.service";
import {authLoginFailure, authLogoutFailure} from "../auth/auth.actions";
import {
  createLocationFailure,
  deleteLocationFailure,
  loadLocationsFailure,
  updateLocationFailure
} from "../location/location.actions";


@Injectable()
export class ErrorEffects {

  constructor(private actions$: Actions, private toastUiService: ToastUiService) {}

  errorEffect$ = createEffect(() => this.actions$.pipe(
    ofType(authLoginFailure, authLogoutFailure, createLocationFailure,
      deleteLocationFailure, updateLocationFailure, loadLocationsFailure),
    switchMap(action => this.toastUiService.presentToast(action.error))
  ), {dispatch: false});
}
