import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MainMenuComponent } from './main-menu/main-menu';
import { CustInvoiceComponent } from './cust-invoice/cust-invoice';
import { CustomerDetailsComponent } from './customer/customer-details';
@NgModule({
	declarations: [
		MainMenuComponent,
		CustInvoiceComponent,
		CustomerDetailsComponent
	],
	imports: [
		IonicModule
	],
	entryComponents :[
		CustInvoiceComponent,
		CustomerDetailsComponent
	],
	exports: [
		MainMenuComponent,
		CustInvoiceComponent,
		CustomerDetailsComponent
	]
})
export class ComponentsModule {}
