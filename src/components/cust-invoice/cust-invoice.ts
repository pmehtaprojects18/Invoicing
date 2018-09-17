import { Component } from '@angular/core';
// import { DatePicker } from '@ionic-native/date-picker';
import * as moment from 'moment';
import { CustomerService } from '../../providers/customer/customer.service';
import { Customer } from '../../model/customer.class';
import { CustomerInvoiceService } from '../../providers/invoice/customer-invoice.service';

/**
 * Generated class for the CustInvoiceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cust-invoice',
  templateUrl: 'cust-invoice.html'
})
export class CustInvoiceComponent {

  public invoiceDate:string = new Date().toLocaleDateString();
  public custList:Array<Customer>;


  constructor(public customerService:CustomerService, public invoiceService:CustomerInvoiceService) {
    this.invoiceDate = moment().format('YYYY-MM-DD');
  }

 ngOnInit(){
   this.customerService.getCustomerList().then(data =>{
     this.custList = data;
   })
 }
}
