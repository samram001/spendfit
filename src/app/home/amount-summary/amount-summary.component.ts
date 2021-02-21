import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-amount-summary',
  templateUrl: './amount-summary.component.html',
  styleUrls: ['./amount-summary.component.scss']
})
export class AmountSummaryComponent implements OnInit {
  account_summary:any;
  constructor(private apiService:ApiService) { 
    this.apiService.callAccountSummary$.subscribe((response)=>{
      this.account_summary = response;
    });
  }

  ngOnInit(): void {
  }

}
