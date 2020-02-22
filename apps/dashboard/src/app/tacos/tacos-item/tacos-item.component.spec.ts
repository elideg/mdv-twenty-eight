import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosItemComponent } from './tacos-item.component';

describe('TacosItemComponent', () => {
  let component: TacosItemComponent;
  let fixture: ComponentFixture<TacosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
