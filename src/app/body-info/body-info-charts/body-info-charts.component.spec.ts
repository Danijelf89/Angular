import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyInfoChartsComponent } from './body-info-charts.component';

describe('BodyInfoChartsComponent', () => {
  let component: BodyInfoChartsComponent;
  let fixture: ComponentFixture<BodyInfoChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyInfoChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyInfoChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
