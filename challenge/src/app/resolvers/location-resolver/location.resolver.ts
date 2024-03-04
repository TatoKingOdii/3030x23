import { ResolveFn } from '@angular/router';
import {Store} from "@ngrx/store";
import {inject} from "@angular/core";

export const locationResolver: ResolveFn<boolean> = (route, state) => {
  return inject(LocationResolver).resolve();
};

export class LocationResolver {

  // NOT USED YET

  constructor(private locationStore: Store) {}

  resolve(): boolean {
    return true;
  }
}
