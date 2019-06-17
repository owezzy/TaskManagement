import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

import {Comment, CommentUpdate, Project, User} from '../../model';
import {ProjectService} from '../../project/project.service';
import {UserService} from '../../user/user.service';
import {ActivitiesService} from '../../activities/activites.service';
import {limitWithEllipsis} from '../../utilities/string-utilities';

@Component({
  selector: 'app-project-comments-container',
  templateUrl: './project-comments-container.component.html',
  styleUrls: ['./project-comments-container.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCommentsContainerComponent {
  user: Observable<User>;
  selectedProject: Observable<Project>;
  projectComments: Observable<Comment[]>;
  // tags: Observable<Tag[]>

  constructor(private projectService: ProjectService,
              private userService: UserService,
              private route: ActivatedRoute,
              private activitiesService: ActivitiesService,
              ) {
    this.user = userService.getCurrentUser();
    this.selectedProject = combineLatest(
      projectService.getProjects(),
      route.parent.params)
      .pipe(
        map(([projects, routeParams]) =>
          projects.find((project) => project.id === +routeParams.projectId))
      );

    this.projectComments = this.selectedProject
      .pipe(
        map((project) => project.comments)
      );
  }

  createComment(comment: Comment) {
    this.selectedProject
      .pipe(
        take(1)
      )
      .subscribe((project) => {
        this.projectService.updateProject({
          ...project,
          comments: [...project.comments, comment]
        });
        this.activitiesService.logProjectActivity(
          project.id,
          'comments',
          'New comment was added',
          `A new comment "${limitWithEllipsis(comment.content, 30)}" was added to #project-${project.id}.`
        );
      });
  }

  updateComment(update: CommentUpdate) {
    this.selectedProject
      .pipe(
        take(1)
      )
      .subscribe((project) => {
        const updatedComments = project.comments.slice();
        const oldComment = updatedComments[update.index];
        updatedComments[update.index] = update.comment;
        this.projectService.updateProject({
          ...project,
          comments: updatedComments
        });
        this.activitiesService.logProjectActivity(
          project.id,
          'comments',
          'New comment was added',
          `A new comment "${limitWithEllipsis(oldComment.content, 30)}" was added to #project-${project.id}.`
        );
      });
  }
}
