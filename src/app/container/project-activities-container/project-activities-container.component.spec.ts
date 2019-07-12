// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {ProjectActivitiesContainerComponent} from './project-activities-container.component';
import {ProjectService} from '../../project/project.service';
import {ActivitiesService} from '../../activities/activites.service';
import {ActivatedRoute} from '@angular/router';

@Injectable()
class MockProjectService { }

@Injectable()
class MockActivitiesService { }

describe('ProjectActivitiesContainerComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectActivitiesContainerComponent
      ],
      providers: [
        {provide: ProjectService, useClass: MockProjectService},
        {provide: ActivitiesService, useClass: MockActivitiesService},
        ActivatedRoute,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectActivitiesContainerComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #selectionChange()', async () => {
    // const result = component.selectionChange(selection);
  });

});
