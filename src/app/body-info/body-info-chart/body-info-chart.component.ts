import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Chart } from 'chart.js/auto';
import { BodyDataChartServiceService } from './body-data-chart-service.service';

@Component({
  selector: 'app-body-info-chart',
  templateUrl: './body-info-chart.component.html',
  styleUrls: ['./body-info-chart.component.css']
})
export class BodyInfoChartComponent implements OnInit{
constructor(private service : BodyDataChartServiceService, private modal : ModalController){}
selectedYear = "2023"
selectedMonth = "Januar"
selectedType = "Kg"
  chart : any;
   foo:string[] = ['13-1-2023','13-1-2023', '14-1-2023','15-1-2023','13-1-2023','13-1-2023', '14-1-2023','15-1-2023',
   '13-1-2023','13-1-2023', '14-1-2023','15-1-2023',
   '13-1-2023','13-1-2023', '14-1-2023','15-1-2023',
   '13-1-2023','13-1-2023', '14-1-2023','18-1-2023'];
   data:number[] = [85,92, 76, 33, 85,92, 76, 33, 85,92, 76, 33, 85,92, 76, 33, 85,92, 76, 99];
  
   closeModal()
   {
    this.modal.dismiss();
   }

  ngOnInit(){
    this.service.getChartData().subscribe({
       next: (data) =>{
          //this.datesListSubject.next(data.map(row => row.messurementDate));
          //this.dataSubject.next(data.map(row => row.kg));
          
          this.createChart(data.map(row => row.messurementDate), data.map(row => row.kg))
        },
       error: (err) =>{
         console.log("error" + err);
        },
      })
    }

    createChart(labels : Date[], data : number[])
    {
      this.chart = new Chart("chartCanvas", {
        type: 'line', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: labels, 
           datasets: [
            {
              label: 'Kg',
              data: data,
              backgroundColor: 'blue'
            },
            
          ]
        },
        options: {
          aspectRatio:2.5,
          animation:false
        }
        
      });
    
    
    }

    handleChange(e : any) {
      console.log('ionChange fired with value: ' + e.detail.value);
    }
}
