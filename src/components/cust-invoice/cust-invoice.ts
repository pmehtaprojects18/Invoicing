import { Component } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import * as moment from 'moment';

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

  constructor(private datePicker: DatePicker) {
    this.invoiceDate = moment().format('YYYY-MM-DD');
  }

}
