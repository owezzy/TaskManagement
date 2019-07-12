// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {ProjectContainerComponent} from './project-container.component';
import {ProjectService} from '../../project/project.service';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
class MockProjectService { }

@Injectable()
class MockRouter { navigate = jest.fn(); }

describe('ProjectContainerComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectContainerComponent
      ],
      providers: [
        {provide: ProjectService, useClass: MockProjectService},
        ActivatedRoute,
        {provide: Router, useClass: MockRouter},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectContainerComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #activateTab()', async () => {
    // const result = component.activateTab(tab);
  });

  it('should run #updateProject()', async () => {
    // const result = component.updateProject(project);
  });

});
