import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import {CalendarModule} from 'primeng/calendar';
import { AmountSummaryComponent } from './home/amount-summary/amount-summary.component';
import { SpendingByCategoryComponent } from './home/spending-by-category/spending-by-category.component';
import { PaymentTransactionComponent } from './home/payment-transaction/payment-transaction.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule} from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AmountSummaryComponent,
    SpendingByCategoryComponent,
    PaymentTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    HttpClientModule,
    DialogModule,
    ChartModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [CalendarModule]
})
export class AppModule { }
