export class Customer{
    public customerId:string;
    public customerName:string;
    public address1:string;
    public address2:string;
    public city:string;
    public province:string;
    public postalCode:String;
    public phone1:string;
    public phone2:string;
    public email:string;

    constructor(rawObject?:object){
        if(rawObject){
            this.customerId = rawObject['customerId'];
            this.customerName = rawObject['customerName'];
            this.address1 = rawObject['address1'];
            this.address2 = rawObject['address2'];
            this.city = rawObject['city'];
            this.province = rawObject['province'];
            this.postalCode = rawObject['postalCode'];
            this.phone1 = rawObject['phone1'];
            this.phone2 = rawObject['phone2'];
            this.email = rawObject['email'];
        }else{
            this.customerId = '';
            this.customerName = '';
            this.address1 = '';
            this.address2 = '';
            this.city = '';
            this.province = '';
            this.postalCode = '';
            this.phone1 = '';
            this.phone2 = '';
            this.email = '';
        }
    }
}