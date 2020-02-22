import { TacosFacade } from '@mdv-twenty-eight/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Taco } from '@mdv-twenty-eight/core-data';
import { FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-twenty-eight-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.scss']
})
export class TacosComponent implements OnInit {
  form: FormGroup;
  selectedTaco$: Observable<Taco> = this.tacosFacade.selectedTaco$;
  tacos$: Observable<Taco[]> = this.tacosFacade.allTacos$;

  constructor(
      private fb: FormBuilder,
      private tacosFacade: TacosFacade
  ) { }

  ngOnInit() {
      this.initForm();
      this.tacosFacade.loadTacos();
      this.selectTaco({ id: null } as Taco);
  }

  selectTaco(taco: Taco) {
      this.form.patchValue(taco);
      this.tacosFacade.selectTaco(taco.id);
  }

  cancel() {
      this.selectTaco({ id: null } as Taco);
      this.form.reset();
  }

  saveTaco(formDirective: FormGroupDirective) {
      if (this.form.invalid) return;
      if (this.form.value.id) {
          this.tacosFacade.updateTaco(this.form.value);
          this.selectTaco({ id: null } as Taco);
      } else {
          this.tacosFacade.createTaco(this.form.value);
          this.selectTaco({ id: null } as Taco);
      }
  }

  deleteTaco(taco: Taco) {
      this.tacosFacade.deleteTaco(taco);
  }

  initForm() {
      this.form = this.fb.group({
          id: [''],
          name: ['', Validators.compose([Validators.required])],
          calories: ['', Validators.compose([Validators.required])],
          protein: [''],
          salsa: ['']
      })
  }

}
