import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  TACOS_FEATURE_KEY,
  tacosAdapter,
  TacosPartialState,
  TacosState
} from './tacos.reducer';

// Lookup the 'Tacos' feature state managed by NgRx
export const selectTacosState = createFeatureSelector<
  TacosPartialState,
  TacosState
>(TACOS_FEATURE_KEY);

const { selectAll, selectEntities } = tacosAdapter.getSelectors();

export const selectTacosLoading = createSelector(
  selectTacosState,
  (state: TacosState) => state.isLoading
);

export const selectAllTacos = createSelector(
  selectTacosState,
  (state: TacosState) => selectAll(state)
);

export const selectTacosEntities = createSelector(
  selectTacosState,
  (state: TacosState) => selectEntities(state)
);

export const selectTacoId = createSelector(
  selectTacosState,
  (state: TacosState) => state.selectedTacoId
);

export const selectTaco = createSelector(
  selectTacosEntities,
  selectTacoId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
