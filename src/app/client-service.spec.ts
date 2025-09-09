import { TestBed } from '@angular/core/testing';

import * as clientService from './client-service';

describe('ClientService', () => {
  let service: clientService.ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(clientService.ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
