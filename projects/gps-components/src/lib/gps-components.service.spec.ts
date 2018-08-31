import { TestBed, inject } from '@angular/core/testing';

import { GpsComponentsService } from './gps-components.service';

describe('GpsComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GpsComponentsService]
    });
  });

  it('should be created', inject([GpsComponentsService], (service: GpsComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
