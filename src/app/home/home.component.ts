import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rangeDates: Date[];
  display: boolean = false;
  totalTransactions:any=[];
  transactions:any=[];
  filterTransactions:any=[];
  constructor(private apiService:ApiService) {
    this.apiService.callTransactionRefresh$.subscribe((data)=>{
      if(data) {
        this.getTransactions(this.rangeDates);
      }
    });
   }

  ngOnInit(): void {
    this.apiService.getAccountSummary().then((data) => {
      let day1 = new Date(data.default_range1);
      let day2 = new Date(data.default_range2);
      this.rangeDates = [day1,day2];

      this.getTransactions(this.rangeDates);
    });
  }

  showDialog() {
      this.display = true;
  }

  getTransactions(range) {
    this.apiService.getTransactions(range).then((data)=>{
      this.transactions = data;
    });
  }
  
  rangeOnSelect(event) {
    if(this.rangeDates[1]) {
      this.getTransactions(this.rangeDates);
    }
  } 
  
}
