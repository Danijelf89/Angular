import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthChooserComponent } from './month-chooser.component';

describe('MonthChooserComponent', () => {
  let component: MonthChooserComponent;
  let fixture: ComponentFixture<MonthChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthChooserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
