import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosDetailsComponent } from './tacos-details.component';

describe('TacosDetailsComponent', () => {
  let component: TacosDetailsComponent;
  let fixture: ComponentFixture<TacosDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacosDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
