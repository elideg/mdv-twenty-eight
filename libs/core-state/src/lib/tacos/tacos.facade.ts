import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromTacos from './tacos.reducer';
import * as tacosActions from './tacos.actions';
import * as tacosSelectors from './tacos.selectors';
import { Taco } from '@mdv-twenty-eight/core-data';

@Injectable({
  providedIn: 'root'
})
export class TacosFacade {
  allTacos$ = this.store.pipe(select(tacosSelectors.selectAllTacos));
  selectedTaco$ = this.store.pipe(select(tacosSelectors.selectTaco));
  tacoLoading$ = this.store.pipe(select(tacosSelectors.selectTacosLoading));

  constructor(private store: Store<fromTacos.TacosPartialState>) {}

  selectTaco(selectedTacoId: string) {
    this.dispatch(tacosActions.tacoSelected({ selectedTacoId }));
  }

  loadTacos() {
    this.dispatch(tacosActions.loadTacos());
  }

  createTaco(taco: Taco) {
    this.dispatch(tacosActions.createTaco({ taco }));
  }

  updateTaco(taco: Taco) {
    this.dispatch(tacosActions.updateTaco({ taco }));
  }

  deleteTaco(taco: Taco) {
    this.dispatch(tacosActions.deleteTaco({ taco }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
