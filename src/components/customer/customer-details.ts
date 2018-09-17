import { Component } from '@angular/core';
import { Customer } from '../../model/customer.class';
import { CustomerService } from '../../providers/customer/customer.service';
import { UiServiceProvider } from '../../providers/ui-service/ui-service';
import { Events } from 'ionic-angular';

@Component({
    selector: 'customer-detail',
    templateUrl: 'customer-details.html'
})
export class CustomerDetailsComponent{
    public newCustomer:Customer;
    public customers:Array<Customer>;

    constructor(
        private customerService:CustomerService,
        private uiService:UiServiceProvider,
        private events:Events
    ){
        this.events.subscribe('addNewCustomer',()=>{
            this.customerService.getCustomerList().then(data => this.customers = data);
        })
    }

    ngOnInit(){
        this.customerService.getCustomerList().then(data => this.customers = data);
        this.newCustomer = new Customer();
    }

    saveCustomer(){
        this.customerService.addNewCustomer(this.newCustomer).then(result => {
            if(result){
                this.uiService.displayToast("Customer Created Successfully!!");
                this.newCustomer = new Customer();
                this.events.publish('addNewCustomer');
            }
        });
    }

    selectCustomer(selCustomer){
        this.newCustomer = selCustomer;
    }
    clearFields(){
        this.newCustomer = new Customer();
    }
}