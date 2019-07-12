// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {ProjectCommentsContainerComponent} from './project-comments-container.component';
import {ProjectService} from '../../project/project.service';
import {UserService} from '../../user/user.service';
import {ActivatedRoute} from '@angular/router';
import {ActivitiesService} from '../../activities/activites.service';
import {TagsService} from '../../tags/tags.service';

@Injectable()
class MockProjectService { }

@Injectable()
class MockUserService { }

@Injectable()
class MockActivitiesService { }

@Injectable()
class MockTagsService { }

describe('ProjectCommentsContainerComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectCommentsContainerComponent
      ],
      providers: [
        {provide: ProjectService, useClass: MockProjectService},
        {provide: UserService, useClass: MockUserService},
        ActivatedRoute,
        {provide: ActivitiesService, useClass: MockActivitiesService},
        {provide: TagsService, useClass: MockTagsService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectCommentsContainerComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #createComment()', async () => {
    // const result = component.createComment(comment);
  });

  it('should run #updateComment()', async () => {
    // const result = component.updateComment(update);
  });

});
