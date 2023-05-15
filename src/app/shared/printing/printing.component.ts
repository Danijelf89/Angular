import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent {

  @Input() window = {} as Window;

  printWindow()
  {
  
    console.log('print se okinio');
    this.window.print();
  }

  

}
