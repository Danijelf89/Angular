import { TestBed } from '@angular/core/testing';

import { BodyInfoChartsService } from './body-info-charts.service';

describe('BodyInfoChartsService', () => {
  let service: BodyInfoChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyInfoChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
