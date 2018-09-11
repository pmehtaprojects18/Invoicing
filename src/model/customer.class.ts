export class Customer{
    public customerId:string;
    public customerName:string;
    public address1:string;
    public address2:string;
    public city:string;
    public province:string;
    public phone1:string;
    public phone2:string;
    public email:string;

    constructor(rawObject){
        this.customerId = rawObject['customerId'];
        this.customerName = rawObject['customerName'];
        this.address1 = rawObject['address1'];
        this.address2 = rawObject['address2'];
        this.city = rawObject['city'];
        this.province = rawObject['province'];
        this.phone1 = rawObject['phone1'];
        this.phone2 = rawObject['phone2'];
        this.email = rawObject['email'];
    }
}