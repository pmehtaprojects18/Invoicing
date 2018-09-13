import { Component } from '@angular/core';
import { UiServiceProvider } from '../../providers/ui-service/ui-service';
import { UICOMPONENTS } from '../../enums/enums';
import { NavController } from 'ionic-angular';
import { CustInvoiceComponent } from '../cust-invoice/cust-invoice';
import { CustomerDetailsComponent } from '../customer/customer-details';
/**
 * Generated class for the MainMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenuComponent {

  public uiComponent = UICOMPONENTS;

  constructor(
    private uiService:UiServiceProvider,
    private navCtrl:NavController) {
    
  }

  openModule(compModule:UICOMPONENTS){
    switch(compModule){
      case UICOMPONENTS.CUSTOMERINVOICE:
        this.uiService.selectedUI = UICOMPONENTS.CUSTOMERINVOICE;
        this.navCtrl.push(CustInvoiceComponent);
        break;
      case UICOMPONENTS.CUSTOMERS:
        this.uiService.selectedUI = UICOMPONENTS.CUSTOMERS;
        this.navCtrl.push(CustomerDetailsComponent);
        break;
    }
  }
}
