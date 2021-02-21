import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-spending-by-category',
  templateUrl: './spending-by-category.component.html',
  styleUrls: ['./spending-by-category.component.scss']
})
export class SpendingByCategoryComponent implements OnInit {
  
  data: any;
  options: any;
  
  constructor(private apiService: ApiService) {
    this.apiService.callTransaction$.subscribe((response) => {
      if(response.length==0) {
        this.data.datasets[0].data=[0,0,0,0,0,0,0,0]
      } else if(response.length>0) {
        this.data.datasets[0].data=[0,0,0,0,0,0,0,0]
        response.forEach(element => {
          let indx = this.data.labels.indexOf(element.category);
          this.data.datasets[0].data[indx]+= parseFloat(element.amount);
        });
      }
      
        
      
    });
  }

  ngOnInit(): void {
    this.data = {
      labels: ["Travel", "Hotel", "Fuel", "Dining", "Rentals", "Wholesale", "Supplies", "Other"],
      datasets: [
        {
          data: [1, 2, 3, 4, 5, 6, 7, 8],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#008000",
            "#FF00FF",
            "#00FF00",
            "#FFFF00",
            "#800080"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#008000",
            "#FF00FF",
            "#00FF00",
            "#FFFF00",
            "#800080"
          ],
          pointStyle: 'circle'
        }]

    };
    this.options = {
      legend: {
        display: true,
        position: 'left',
        labels: {
          fontSize: 16,
          padding: 35,
          boxWidth: 25,
          usePointStyle: true
        }
      },
      responsive: false,
      display: true
    }
  }


  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
