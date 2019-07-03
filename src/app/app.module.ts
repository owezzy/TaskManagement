import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {TaskListComponent} from './tasks/task-list/task-list.component';
import {TaskComponent} from './tasks/task/task.component';
import {EnterTaskComponent} from './tasks/enter-task/enter-task.component';
import {CheckboxComponent} from './ui/checkbox/checkbox.component';
import {TaskService} from './tasks/task.service';
import {ToggleComponent} from './ui/toggle/toggle.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {Database} from './database';
import {TaskListContainerComponent} from './container/task-list-container/task-list-container.component';
import {ProjectService} from './project/project.service';
import {ProjectComponent} from './project/project/project.component';
import {ProjectContainerComponent} from './container/project-container/project-container.component';
import {TabsComponent} from './ui/tabs/tabs.component';
import {NavigationItemComponent} from './ui/navigation-item/navigation-item.component';
import {NavigationSectionComponent} from './ui/navigation-section/navigation-section.component';
import {NavigationComponent} from './ui/navigation/navigation.component';
import {EditorComponent} from './ui/editor/editor.component';
import {ProfilePictureComponent} from './user/profile-picture/profile-picture.component';
import {UserAreaComponent} from './user/user-area/user-area.component';
import {FromNowPipe} from './pipes/from-now.pipe';
import {CommentComponent} from './comments/comment/comment.component';
import {CommentsComponent} from './comments/comments/comments.component';
import {ProjectCommentsContainerComponent} from './container/project-comments-container/project-comments-container.component';
import {UserService} from './user/user.service';
import {routes} from './routes';
import {ProjectContainerGuard} from './guards/project-container.guard';
import {ActivitiesService} from './activities/activites.service';
import { ActivitySliderComponent } from './activities/activity-slider/activity-slider.component';
import { ActivityComponent } from './activities/activity/activity.component';
import { ActivitiesComponent } from './activities/activities/activities.component';
import { ProjectActivitiesContainerComponent } from './container/project-activities-container/project-activities-container.component';
import { CalenderTimePipe } from './pipes/calender-time.pipe';
import { TagsPipe } from './pipes/tags.pipe';
import { TagsInputDirective } from './tags/tags-input.directive';
import { TagsSelectComponent } from './tags/tags-select/tags-select.component';
import {TagsService} from './tags/tags.service';
import { DraggableDirective } from './draggable/draggable.directive';
import { DraggableDropZoneDirective } from './draggable/draggable-drop-zone.directive';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskDetailsContainerComponent } from './container/task-details-container/task-details-container.component';
import { FormatDurationPipe } from './pipes/format-duration.pipe';
import { DurationComponent } from './ui/duration/duration.component';
import { EffortsComponent } from './efforts/efforts/efforts.component';
import { EffortsTimelineComponent } from './efforts/efforts-timeline/efforts-timeline.component';
import { ProjectDashboardComponent } from './projects-dashboard/project-dashboard/project-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent,
    ToggleComponent,
    TaskListContainerComponent,
    ProjectComponent,
    ProjectContainerComponent,
    TabsComponent,
    NavigationItemComponent,
    NavigationSectionComponent,
    NavigationComponent,
    EditorComponent,
    ProfilePictureComponent,
    UserAreaComponent,
    FromNowPipe,
    CommentComponent,
    CommentsComponent,
    ProjectCommentsContainerComponent,
    ActivitySliderComponent,
    ActivityComponent,
    ActivitiesComponent,
    ProjectActivitiesContainerComponent,
    CalenderTimePipe,
    TagsPipe,
    TagsInputDirective,
    TagsSelectComponent,
    DraggableDirective,
    DraggableDropZoneDirective,
    TaskDetailsComponent,
    TaskDetailsContainerComponent,
    FormatDurationPipe,
    DurationComponent,
    EffortsComponent,
    EffortsTimelineComponent,
    ProjectDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database, {delay: 0}),
    RouterModule.forRoot(routes)
  ],

  providers: [
    ActivitiesService,
    TaskService,
    ProjectService,
    UserService,
    TagsService,
    ProjectContainerGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
