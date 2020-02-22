import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Taco } from '@mdv-twenty-eight/core-data';

@Component({
  selector: 'mdv-twenty-eight-tacos-list',
  templateUrl: './tacos-list.component.html',
  styleUrls: ['./tacos-list.component.scss']
})
export class TacosListComponent implements OnInit {
  @Input() tacos: Taco[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(taco: Taco) {
    this.selected.emit(taco);
  }

  delete(taco: Taco) {
    this.deleted.emit(taco);
  }
}
