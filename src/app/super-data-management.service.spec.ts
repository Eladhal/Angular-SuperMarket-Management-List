import { TestBed, inject } from '@angular/core/testing';

import { SuperDataManagementService } from './super-data-management.service';

describe('SuperDataManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperDataManagementService]
    });
  });

  it('should be created', inject([SuperDataManagementService], (service: SuperDataManagementService) => {
    expect(service).toBeTruthy();
  }));
});
