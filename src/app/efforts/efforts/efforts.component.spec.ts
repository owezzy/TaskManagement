import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortsComponent } from './efforts.component';

describe('EffortsComponent', () => {
  let component: EffortsComponent;
  let fixture: ComponentFixture<EffortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
