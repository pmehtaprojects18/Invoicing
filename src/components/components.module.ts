import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MainMenuComponent } from './main-menu/main-menu';
import { CustInvoiceComponent } from './cust-invoice/cust-invoice';
import { CustomerDetailsComponent } from './customer/customer-details';
import { SearchListComponent } from './searchList/search-list.component';

@NgModule({
	declarations: [
		MainMenuComponent,
		CustInvoiceComponent,
		CustomerDetailsComponent,
		SearchListComponent
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
		CustomerDetailsComponent,
		SearchListComponent
	]
})
export class ComponentsModule {}
