import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  createLocation,
  createLocationFailure,
  createLocationSuccess, deleteLocation,
  deleteLocationFailure,
  deleteLocationSuccess, dismissLocationModal,
  loadLocations,
  loadLocationsFailure,
  loadLocationsSuccess, openLocationModal,
  updateLocation,
  updateLocationFailure,
  updateLocationSuccess
} from "./location.actions";
import {catchError, exhaustMap, map, of, switchMap} from "rxjs";
import {LocationService} from "./location.service";
import {ModalService} from "../../../../challenge/src/app/core/modal-service/modal.service";

@Injectable()
export class LocationEffects {

  constructor(private actions$: Actions, private locationService: LocationService, private modalService: ModalService) {}

  loadLocations$ = createEffect(() => this.actions$.pipe(
    ofType(loadLocations),
    exhaustMap(action => this.locationService.loadContent().pipe(
      map(result => loadLocationsSuccess({locations: result}))
    )),
    catchError(err => of(loadLocationsFailure({error: 'Failed to load latest location data'})))
  ));

  createLocations$ = createEffect(() => this.actions$.pipe(
    ofType(createLocation),
    exhaustMap(action => this.locationService.createContent(action.location).pipe(
      map(result => createLocationSuccess())
    )),
    catchError(err => of(createLocationFailure({error: 'Failed to create location'})))
  ));

  updateLocations$ = createEffect(() => this.actions$.pipe(
    ofType(updateLocation),
    exhaustMap(action => this.locationService.updateContent(action.location).pipe(
      map(result => updateLocationSuccess())
    )),
    catchError(err => of(updateLocationFailure({error: 'Failed to update location'})))
  ));

  deleteLocations$ = createEffect(() => this.actions$.pipe(
    ofType(deleteLocation),
    exhaustMap(action => this.locationService.deleteContent(action.location).pipe(
      map(result => deleteLocationSuccess())
    )),
    catchError(err => of(deleteLocationFailure({error: 'Failed to delete location'})))
  ));

  refreshOnChange$ = createEffect(() => this.actions$.pipe(
    ofType(createLocationSuccess, updateLocationSuccess, deleteLocationSuccess),
    map(action => loadLocations())
  ));

  openModal$ = createEffect(() => this.actions$.pipe(
    ofType(openLocationModal),
    switchMap(action => this.modalService.presentLocationModal(action.location))
  ), {dispatch: false});

  dismissModal = createEffect(() => this.actions$.pipe(
    ofType(dismissLocationModal),
    switchMap(action => this.modalService.dismissModal())
  ), {dispatch: false});
}
