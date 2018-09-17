import { Injectable } from '@angular/core';
import { Customer } from '../../model/customer.class';
import { DataStorageService } from '../storage/storage.service';
import { STORAGEVALUES } from '../../enums/enums';

@Injectable()
export class CustomerService{

    private customers:Array<Customer>=[];

    constructor(private storageService:DataStorageService){

    }
    
    public addNewCustomer(customer:Customer):Promise<boolean>{

        return new Promise((response,reject)=> {
            this.storageService.getData(STORAGEVALUES.CUSTOMER).then(data =>{
                if(!data){
                    customer.customerId = new Date().getTime().toString();
                    this.customers.push(customer);
                }else{
                    this.customers = data;
                    let cust:Customer = this.customers.find(item => item.customerId === customer.customerId);
                    if(cust){
                        Object.assign(cust,customer);
                    }else{
                        customer.customerId = new Date().getTime().toString();
                        this.customers.push(customer);
                    }
                }
                if(this.customers.length>0){
                    this.storageService.saveData(STORAGEVALUES.CUSTOMER,this.customers).then(()=>{
                        console.log("Data Saved Succesfully");
                        response(true);
                    }).catch((err)=>{
                        console.log("save customer Error: " + err);
                        reject(false);
                    });
                }
            });
        })
    }

    public getCustomerList():Promise<Customer[]>{

        return new Promise((response,reject)=> {
            this.storageService.getData(STORAGEVALUES.CUSTOMER).then(data =>{
                console.log(data);
                response(data);
            }).catch(err => {
                console.log(err);
                reject();
            })
        });
    }
}