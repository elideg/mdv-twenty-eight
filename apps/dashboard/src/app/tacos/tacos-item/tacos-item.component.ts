import { TacosFacade } from '@mdv-twenty-eight/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Taco } from '@mdv-twenty-eight/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-twenty-eight-tacos-item',
  templateUrl: './tacos-item.component.html',
  styleUrls: ['./tacos-item.component.scss']
})
export class TacosItemComponent implements OnInit {
  tacos$: Observable<Taco>;

  constructor(
    private route: ActivatedRoute,
    private tacosFacade: TacosFacade
  ) { }

  ngOnInit() {
    this.tacosFacade.loadTacos();
    this.route.params.subscribe((param) => this.tacosFacade.selectTaco(param['id']));
    this.tacos$ = this.tacosFacade.selectedTaco$
  }

}
