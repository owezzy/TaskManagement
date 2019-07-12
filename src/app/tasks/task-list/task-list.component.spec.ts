// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {TaskListComponent} from './task-list.component';

describe('TaskListComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskListComponent
      ],
      providers: [
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #addTask()', async () => {
    // const result = component.addTask(title);
  });

  it('should run #activateFilterType()', async () => {
    // const result = component.activateFilterType(type);
  });

  it('should run #updateTask()', async () => {
    // const result = component.updateTask(task);
  });

  it('should run #dropTask()', async () => {
    // const result = component.dropTask(target, source);
  });

});
