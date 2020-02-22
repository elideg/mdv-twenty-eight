import { ActionReducerMap } from '@ngrx/store';

import * as fromTacos from './tacos/tacos.reducer';

export interface AppState {
  tacos: fromTacos.TacosState;
}

export const reducers: ActionReducerMap<AppState> = {
  tacos: fromTacos.reducer,
};

//---------------------------------------
// Common Selectors
//---------------------------------------
