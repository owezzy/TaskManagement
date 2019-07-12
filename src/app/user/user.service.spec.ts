import { async } from '@angular/core/testing';
import {UserService} from './user.service';

describe('UserService', () => {
  let service;

  const http: any = {
    // mock properties here 
  }

  beforeEach(() => {
    service = new UserService(http);
  });

  it('should run #getCurrentUser()', async () => {
    // const result = getCurrentUser();
  });

});
