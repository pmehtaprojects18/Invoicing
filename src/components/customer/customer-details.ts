import { Component } from '@angular/core';
import { Customer } from '../../model/customer.class';
import { CustomerService } from '../../providers/customer/customer.service';
import { UiServiceProvider } from '../../providers/ui-service/ui-service';

@Component({
    selector: 'customer-detail',
    templateUrl: 'customer-details.html'
})
export class CustomerDetailsComponent{
    public newCustomer:Customer;
    constructor(
        private custmerService:CustomerService,
        private uiService:UiServiceProvider
    ){
        
    }

    ngOnInit(){
        this.newCustomer = new Customer();
    }

    saveCustomer(){
        this.custmerService.addNewCustomer(this.newCustomer).then(result => {
            if(result){
                this.uiService.displayToast("Customer Created Successfully!!");
                this.newCustomer = new Customer();
            }
        });
    }
}