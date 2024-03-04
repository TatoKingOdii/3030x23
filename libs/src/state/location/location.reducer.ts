import {createReducer, on} from '@ngrx/store';
import {Loc} from "../../types/loc";
import {
  createLocation, createLocationFailure,
  createLocationSuccess, deleteLocation, deleteLocationFailure, deleteLocationSuccess,
  loadLocations,
  loadLocationsFailure,
  loadLocationsSuccess, updateLocation, updateLocationFailure, updateLocationSuccess
} from "./location.actions";

export const locationFeatureKey = 'location';

export interface LocationState {
  loadingLocations: boolean,
  savingLocation: boolean,
  updatingLocation: boolean,
  deletingLocation: boolean,
  locations: Loc[]
}

const initialState: LocationState = {
  loadingLocations: false,
  savingLocation: false,
  updatingLocation: false,
  deletingLocation: false,
  locations: []
};

export const locationReducer = createReducer(
  initialState,
  on(loadLocations, state => ({...state, loadingLocations: true})),
  on(loadLocationsSuccess, (state,
                                            {locations}) => ({...state, locations: locations, loadingLocations: false})),
  on(loadLocationsFailure, (state) => ({...state, loadingLocations: false})),

  on(createLocation, state => ({...state, savingLocation: true})),
  on(createLocationSuccess, state => ({...state, savingLocation: false})),
  on(createLocationFailure, state => ({...state, savingLocation: false})),

  on(updateLocation, state => ({...state, updatingLocation: true})),
  on(updateLocationSuccess, state => ({...state, updatingLocation: false})),
  on(updateLocationFailure, state => ({...state, updatingLocation: false})),

  on(deleteLocation, state => ({...state, deletingLocation: true})),
  on(deleteLocationSuccess, state => ({...state, deletingLocation: false})),
  on(deleteLocationFailure, state => ({...state, deletingLocation: false})),
);

