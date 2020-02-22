import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosListComponent } from './tacos-list.component';

describe('TacosListComponent', () => {
  let component: TacosListComponent;
  let fixture: ComponentFixture<TacosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
