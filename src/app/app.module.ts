import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskComponent } from './tasks/task/task.component';
import { EnterTaskComponent } from './tasks/enter-task/enter-task.component';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import {TaskService} from './tasks/task.service';
import { ToggleComponent } from './ui/toggle/toggle.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {Database} from './database';
import { TaskListContainerComponent } from './container/task-list-container/task-list-container.component';
import {ProjectService} from './project/project.service';
import { ProjectComponent } from './project/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent,
    ToggleComponent,
    TaskListContainerComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database, {delay: 0})
  ],
  providers: [TaskService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
