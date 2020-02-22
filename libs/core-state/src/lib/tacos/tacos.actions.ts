import { createAction, props } from '@ngrx/store';

import { Taco } from '@mdv-twenty-eight/core-data';

export const tacoSelected = createAction(
  '[TACO] Taco Selected',
  props<{ selectedTacoId: string }>()
);

// Load Actions
export const loadTacos = createAction('[TACO] Load Tacos');

export const tacosLoaded = createAction(
  '[TACO] Tacos Loaded',
  props<{ tacos: Taco[] }>()
);

// Create Actions
export const createTaco = createAction(
  '[TACO] Create Taco',
  props<{ taco: Taco }>()
);

export const tacoCreated = createAction(
  '[TACO] Taco Created',
  props<{ taco: Taco }>()
);

// Update Actions
export const updateTaco = createAction(
  '[TACO] Update Taco',
  props<{ taco: Taco }>()
);

export const tacoUpdated = createAction(
  '[TACO] Taco Updated',
  props<{ taco: Taco }>()
);

// Delete Actions
export const deleteTaco = createAction(
  '[TACO] Delete Taco',
  props<{ taco: Taco }>()
);

export const tacoDeleted = createAction(
  '[TACO] Taco Deleted',
  props<{ taco: Taco }>()
);
