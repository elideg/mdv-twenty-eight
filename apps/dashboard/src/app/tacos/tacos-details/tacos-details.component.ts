import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Taco } from '@mdv-twenty-eight/core-data';

@Component({
  selector: 'mdv-twenty-eight-tacos-details',
  templateUrl: './tacos-details.component.html',
  styleUrls: ['./tacos-details.component.scss']
})
export class TacosDetailsComponent implements OnInit {
  originalName;
  currentTaco: Taco

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set taco(value) {
    if (value) this.originalName = value.name;
      this.currentTaco = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(taco: Taco) {
    this.saved.emit(taco);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
