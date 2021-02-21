import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  apiurl: string = "http://localhost:3000/";

  accountSummary = new Subject<any>();
  callAccountSummary$ = this.accountSummary.asObservable();

  transactions = new Subject<any>();
  callTransaction$ = this.transactions.asObservable();

  transactionRefresh = new Subject<any>();
  callTransactionRefresh$ = this.transactionRefresh.asObservable();

  setAccountSummary(value) {
    this.accountSummary.next(value);
  }

  setTransactions(value) {
    this.transactions.next(value);
  }

  setTransactionRefresh(value) {
    this.transactionRefresh.next(value);
  }

  getMenuList() {
    return this.http.get(this.apiurl+'menu')
      .toPromise()
      .then(res => <MenuList[]>res)
      .then(data => {
        return data;
      });
  }

  getAccountSummary() {
    return this.http.get(this.apiurl+'account_summary')
      .toPromise().then(data => {
        this.setAccountSummary(data[0]);
        return data[0];
    });
  }

  getTransactions(rangeDates) {
    return this.http.get(this.apiurl+'transactions').toPromise().then(data => {
      let response:any=data;
      let transactionData = response.filter((item)=>{
        return new Date(item['date']) > new Date(rangeDates[0]) && new Date(item['date']) < new Date(rangeDates[1]);
      });
      
      this.setTransactions(transactionData);
      return transactionData;
    });
  }

  makePayment(paymentDetail){
    return this.http.post(this.apiurl+'transactions', paymentDetail);
  }

  updateAccountSummary(updateInfo){
    return this.http.put(this.apiurl+'account_summary/' + updateInfo.id, updateInfo)
  }
}

export interface MenuList {
  title?;
  data?;
}
