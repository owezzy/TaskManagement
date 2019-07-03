// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {EnterTaskComponent} from './enter-task.component';

describe('EnterTaskComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        EnterTaskComponent
      ],
      providers: [
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(EnterTaskComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #enterTask()', async () => {
    // const result = component.enterTask(titleInput);
  });

});
