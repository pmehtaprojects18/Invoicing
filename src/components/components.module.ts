import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MainMenuComponent } from './main-menu/main-menu';
import { CustInvoiceComponent } from './cust-invoice/cust-invoice';
@NgModule({
	declarations: [MainMenuComponent,
    CustInvoiceComponent],
	imports: [
		IonicModule
	],
	exports: [MainMenuComponent,
    CustInvoiceComponent]
})
export class ComponentsModule {}
