import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-payment-transaction',
  templateUrl: './payment-transaction.component.html',
  styleUrls: ['./payment-transaction.component.scss']
})
export class PaymentTransactionComponent implements OnInit {
  amount_due;
  due_date:Date;
  @Input() data:object;
  transactions:any=[];
  payments:any=[];
  paymentForm = new FormGroup({
    description: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    amount: new FormControl('',[Validators.required])
        
  });
  makePaymentPopupdisplay:boolean=false;
  categories:any=[];
  types:any=[];
  accountSummary:any;
  constructor(private apiService:ApiService) {
    this.apiService.callAccountSummary$.subscribe((response)=>{
      this.accountSummary = response;
      this.amount_due = response.amount_due;
      this.due_date = response.due_date;
    });
    this.apiService.callTransaction$.subscribe((response)=>{
      this.transactions = response.filter((item)=>{
        return item.type=="Posted";
      });
      this.payments = response.filter((item)=>{
        return (item.type=="Scheduled" || item.type=="Processed");
      });
    });
   }
   
  ngOnInit(): void {
    this.categories = [
      {name: 'Select', code: ''},
      {name: 'Travel', code: 'Travel'},
      {name: 'Hotel', code: 'Hotel'},
      {name: 'Fuel', code: 'Fuel'},
      {name: 'Dining', code: 'Dining'},
      {name: 'Rentals', code: 'Rentals'},
      {name: 'Wholesale', code: 'Wholesale'},
      {name: 'Supplies', code: 'Supplies'},
      {name: 'Other', code: 'Other'}
    ];
    this.types = [
      {name: 'Select', code: ''},
      {name: 'Posted', code: 'Posted'},
      {name: 'Scheduled', code: 'Scheduled'},
      {name: 'Processed', code: 'Processed'}
    ]
  }

  makePayment() {
    this.makePaymentPopupdisplay = true;
  }

  onSubmit() {
    this.makePaymentPopupdisplay = false;
    let paymentDetail = this.paymentForm.value;
    paymentDetail.category = JSON.parse(JSON.stringify(this.paymentForm.value.category.name));
    paymentDetail.type = JSON.parse(JSON.stringify(this.paymentForm.value.type.name));
    paymentDetail.id = Math.floor(1000 + Math.random() * 9000);
    this.apiService.makePayment(paymentDetail).subscribe((data)=>{
      // this.accountSummary.transaction_record++;
      // this.apiService.updateAccountSummary(this.accountSummary).subscribe((data)=>{
      //   this.apiService.setAccountSummary(true);
      // });
    });
  }
}
