import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyInfoChartComponent } from './body-info-chart.component';

describe('BodyInfoChartComponent', () => {
  let component: BodyInfoChartComponent;
  let fixture: ComponentFixture<BodyInfoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyInfoChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyInfoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
