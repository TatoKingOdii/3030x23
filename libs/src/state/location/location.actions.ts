import {createAction, emptyProps, props} from '@ngrx/store';
import {Loc} from "../../types/loc";

export const loadLocations = createAction(
  '[Location] Load Locations',
  emptyProps
);

export const loadLocationsSuccess = createAction(
  '[Location] Load Locations Success',
  props<{locations: Loc[]}>()
);

export const loadLocationsFailure = createAction(
  '[Location] Load Locations Failure',
  props<{error: string}>()
);

export const createLocation = createAction(
  '[Location] Create Location',
  props<{location: Loc}>()
);

export const createLocationSuccess = createAction(
  '[Location] Create Location Success',
  emptyProps
);

export const createLocationFailure = createAction(
  '[Location] Create Location Failure',
  props<{error: string}>()
);

export const updateLocation = createAction(
  '[Location] Update Location',
  props<{location: Loc}>()
);

export const updateLocationSuccess = createAction(
  '[Location] Update Location Success',
  emptyProps
);

export const updateLocationFailure = createAction(
  '[Location] Update Location Failure',
  props<{error: string}>()
);

export const deleteLocation = createAction(
  '[Location] Delete Location',
  props<{location: Loc}>()
);

export const deleteLocationSuccess = createAction(
  '[Location] Delete Location Success',
  emptyProps
);

export const deleteLocationFailure = createAction(
  '[Location] Delete Location Failure',
  props<{error: string}>()
);

export const openLocationModal = createAction(
  '[Location] Open Location Modal',
  props<{location: Loc}>()
);

export const dismissLocationModal = createAction(
  '[Location] Dismiss Location Modal',
  emptyProps
);
