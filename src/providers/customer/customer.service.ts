import { Injectable } from '@angular/core';
import { Customer } from '../../model/customer.class';
import { DataStorageService } from '../storage/storage.service';
import { STORAGEVALUES } from '../../enums/enums';

@Injectable()
export class CustomerService{

    private customers:Customer[];

    constructor(private storageService:DataStorageService){

    }
    
    public addNewCustomer(customer:Customer){
        this.storageService.getData(STORAGEVALUES.CUSTOMER).then(data =>{
            if(!data){
                this.customers.push(customer);
            }else{
                this.customers = data;
                this.customers.push(customer);
            }
            if(this.customers.length>0){
                this.storageService.saveData(STORAGEVALUES.CUSTOMER,this.customers).then(()=>{
                    console.log("Data Saved Succesfully");
                }).catch((err)=>{
                    console.log("save customer Error: " + err);
                });
            }
        })
    }

    public getCustomerList(){
        this.storageService.getData(STORAGEVALUES.CUSTOMER).then(data =>{
            console.log(data);
        })
    }
}