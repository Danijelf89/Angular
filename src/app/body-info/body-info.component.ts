import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BodyInfoService } from './body-info.service';

@Component({
  selector: 'app-body-info',
  templateUrl: './body-info.component.html',
  styleUrls: ['./body-info.component.css'],
})
export class BodyInfoComponent implements OnInit {
  bodyInfoData$ = this.service.bodyInfoData$;
  nothingToShow$ = this.service.nothingToShow$;
  chosenMonths$ = this.service.chosenDate$;
  chosenYear$ = this.service.chosenYear$;

  constructor(private service: BodyInfoService) {}
  ngOnInit(): void {
    this.service.setInitalFilterData();
  }

  monthsForm = new FormGroup({
    januaryIsChecked: new FormControl(false),
    februarysChecked: new FormControl(false),
    marchsChecked: new FormControl(false),
    aprilsChecked: new FormControl(false),
    maysChecked: new FormControl(false),
    junsChecked: new FormControl(false),
    julysChecked: new FormControl(false),
    avgustsChecked: new FormControl(false),
    septembersChecked: new FormControl(false),
    octobersChecked: new FormControl(false),
    novembersChecked: new FormControl(false),
    decembersChecked: new FormControl(false),
    chosenYear: new FormControl(''),
  });

  handleChangeYearChanged(e: Event) {
    this.monthsForm.patchValue({
      chosenYear: (<CustomEvent>e).detail.value,
    });

    this.service.yearChanged((<CustomEvent>e).detail.value);
  }

  back() {
    this.service.navigateBack();
  }

  menuClosed() {
    this.service.loadMonths(this.monthsForm);
  }

  openChartDetails() {
    this.service.openChartDetails();
  }
}
