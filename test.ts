class Bank{
    custid:number;
    custname:string;
    custaccountnumber:number;
    constructor(id:number,name:string,accountnumber:number){
        this.custid=id;
        this.custname=name;
        this.custaccountnumber=accountnumber;
    }
    getSavingDeposit(){
        return `The SavingDeposit of ${this.custid} is 2% ` 
    }
    getFixedDeposit(){
        return `The FixedDeposit of ${this.custname} is 0.25%`
    }
    getReccuringDeposit(){
        return `The ReccuringDeposit of ${this.custaccountnumber} is 3.5%`
    }
}
let cust1=new Bank(101,'Vaishu',1234)
let cust2=new Bank(102,'Veda',12345)
let cust3=new Bank(101,'Vaishu',123456)

console.log(cust1.custid,cust1.custname,cust1.custaccountnumber)
console.log(cust2.custid,cust2.custname,cust2.custaccountnumber)
console.log(cust3.custid,cust3.custname,cust3.custaccountnumber)

console.log(cust1.getSavingDeposit())
console.log(cust2.getReccuringDeposit())
console.log(cust3.getFixedDeposit())