import { TRANSACTIONTYPE } from "../enums/enums";

export class InvoiceDetails{
    public itemCode:string;
    public itemName:string;
    public quantity:number;
    public amount:number;

}

export class Invoice{
    public invoiceNumber:string;
    public invoiceDate:string;
    public invoiceType:TRANSACTIONTYPE;
    public clientID:string;
    public grossTotal:number;
    public taxes:number;
    public netTotal:number;
    public discription:string;
    public invoiceDetails:Array<InvoiceDetails>;
    
}