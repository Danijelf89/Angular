import { TestBed } from '@angular/core/testing';

import { BodyDataChartServiceService } from './body-data-chart-service.service';

describe('BodyDataChartServiceService', () => {
  let service: BodyDataChartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyDataChartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
