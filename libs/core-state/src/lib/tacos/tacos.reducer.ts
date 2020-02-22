import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as tacosActions from './tacos.actions';
import { Taco } from '@mdv-twenty-eight/core-data';

export const TACOS_FEATURE_KEY = 'tacos';

export interface TacosState extends EntityState<Taco> {
  selectedTacoId?: string | number;
  isLoading: boolean;
}

export interface TacosPartialState {
  readonly [TACOS_FEATURE_KEY]: TacosState;
}

export const tacosAdapter: EntityAdapter<Taco> = createEntityAdapter<Taco>();

export const initialState: TacosState = tacosAdapter.getInitialState({
  // set initial required properties
  selectedTacoId: null,
  isLoading: false
});

const tacosReducer = createReducer(
  initialState,
  on(tacosActions.tacoSelected, (state, { selectedTacoId }) =>
    Object.assign({}, state, { selectedTacoId })
  ),
  on(tacosActions.tacosLoaded, (state, { tacos }) =>
    tacosAdapter.addAll(tacos, { ...state, isLoading: false })
  ),
  on(tacosActions.tacoCreated, (state, { taco }) =>
    tacosAdapter.addOne(taco, { ...state, isLoading: false })
  ),
  on(tacosActions.tacoUpdated, (state, { taco }) =>
    tacosAdapter.upsertOne(taco, { ...state, isLoading: false })
  ),
  on(tacosActions.tacoDeleted, (state, { taco }) =>
    tacosAdapter.removeOne(taco.id, { ...state, isLoading: false })
  ),
  on(
    tacosActions.loadTacos,
    tacosActions.createTaco,
    tacosActions.updateTaco,
    tacosActions.deleteTaco,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: TacosState | undefined, action: Action) {
  return tacosReducer(state, action);
}
