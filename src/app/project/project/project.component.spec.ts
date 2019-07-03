// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {ProjectComponent} from './project.component';

describe('ProjectComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectComponent
      ],
      providers: [
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #activateTab()', async () => {
    // const result = component.activateTab(tab);
  });

  it('should run #updateTitle()', async () => {
    // const result = component.updateTitle(title);
  });

  it('should run #updateDescription()', async () => {
    // const result = component.updateDescription(description);
  });

});
