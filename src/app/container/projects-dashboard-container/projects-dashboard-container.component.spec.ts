import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDashboardContainerComponent } from './projects-dashboard-container.component';

describe('ProjectsDashboardContainerComponent', () => {
  let component: ProjectsDashboardContainerComponent;
  let fixture: ComponentFixture<ProjectsDashboardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsDashboardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
