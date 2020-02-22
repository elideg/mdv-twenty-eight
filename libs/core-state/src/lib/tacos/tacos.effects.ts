import { NotifyService } from './../../../../core-data/src/lib/notify.service';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { TacosFacade } from './tacos.facade'
import * as tacosActions from './tacos.actions';
import { Taco, TacosService } from '@mdv-twenty-eight/core-data';
import { TacosPartialState } from './tacos.reducer';

@Injectable()
export class TacosEffects {
  loadTacos$ = createEffect(() =>
    this.dataPersistence.fetch(tacosActions.loadTacos, {
      run: (
        action: ReturnType<typeof tacosActions.loadTacos>,
        state: TacosPartialState
      ) => {
        return this.tacosService.all().pipe(
          map((tacos: Taco[]) => tacosActions.tacosLoaded({ tacos }))
        );
      },
      onError: (action: ReturnType<typeof tacosActions.loadTacos>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addTaco$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(tacosActions.createTaco, {
      run: (
        action: ReturnType<typeof tacosActions.createTaco>,
        state: TacosPartialState
      ) => {
        return this.tacosService.create(action.taco).pipe(
          map((taco: Taco) => tacosActions.tacoCreated({ taco })),
          tap(() => this.notify.notify('Successfully Added a Taco'))
        );
      },
      onError: (action: ReturnType<typeof tacosActions.createTaco>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateTaco$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(tacosActions.updateTaco, {
      run: (
        action: ReturnType<typeof tacosActions.updateTaco>,
        state: TacosPartialState
      ) => {
        return this.tacosService.update(action.taco).pipe(
          map((taco: Taco) => tacosActions.tacoUpdated({ taco })),
          tap(() => this.notify.notify('Successfully Updated a Taco'))
        );
      },
      onError: (action: ReturnType<typeof tacosActions.updateTaco>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteTaco$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(tacosActions.deleteTaco, {
      run: (
        action: ReturnType<typeof tacosActions.deleteTaco>,
        state: TacosPartialState
      ) => {
        return this.tacosService.delete(action.taco).pipe(
          map((taco: Taco) => tacosActions.tacoDeleted({ taco })),
          tap(() => this.notify.notify('Successfully Deleted a Taco')),
          tap(() => this.tacosFacade.loadTacos())
        );
      },
      onError: (action: ReturnType<typeof tacosActions.deleteTaco>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TacosPartialState>,
    private tacosService: TacosService,
    private notify: NotifyService,
    private tacosFacade: TacosFacade
  ) {}
}
