import { TestBed } from '@angular/core/testing';

import { ActivitiesService } from './activites.service';

describe('ActivitesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitiesService = TestBed.get(ActivitiesService);
    expect(service).toBeTruthy();
  });
});
