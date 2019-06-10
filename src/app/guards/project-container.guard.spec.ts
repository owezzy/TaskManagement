import { TestBed, async, inject } from '@angular/core/testing';

import { ProjectContainerGuard } from './project-container.guard';

describe('ProjectContainerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectContainerGuard]
    });
  });

  it('should ...', inject([ProjectContainerGuard], (guard: ProjectContainerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
