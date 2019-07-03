import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProjectService} from '../project/project.service';
import {UserService} from '../user/user.service';
import {TagsService} from '../tags/tags.service';
import {ActivitiesService} from '../activities/activites.service';
import {TaskService} from '../tasks/task.service';

export const commonTestingModules: any[] = [
  FormsModule,
  ReactiveFormsModule,
  NoopAnimationsModule,
  HttpClientTestingModule,
  RouterTestingModule,
];

// export const commonTestingProviders: any[] = [
//   { provide: UserService, useClass: UserServiceFake },
//   { provide: TaskService, useClass: TaskServiceFake },
//   { provide: ProjectService, useClass: ProjectServiceFake },
//   { provide: ActivitiesService, useClass: ActivitiesServiceFake },
//   { provide: TagsService, useClass: TagsServiceFake },
// ];
