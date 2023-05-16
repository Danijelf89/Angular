export class BodyInfoChartsState
{
    year: number;
    month: number;
    type: number[];
    selectedTab : number;

    constructor(
    year: number,
    month: number,
    type: number[],
    selectedTab : number
  ) {
    this.year = year;
    this.month = month;
    this.type = type;
    this.selectedTab = selectedTab
  }
}