var Bank = /** @class */ (function () {
    function Bank(id, name, accountnumber) {
        this.custid = id;
        this.custname = name;
        this.custaccountnumber = accountnumber;
    }
    Bank.prototype.getSavingDeposit = function () {
        return "The SavingDeposit of " + this.custid + " is 2% ";
    };
    Bank.prototype.getFixedDeposit = function () {
        return "The FixedDeposit of " + this.custname + " is 0.25%";
    };
    Bank.prototype.getReccuringDeposit = function () {
        return "The ReccuringDeposit of " + this.custaccountnumber + " is 3.5%";
    };
    return Bank;
}());
var cust1 = new Bank(101, 'Vaishu', 1234);
var cust2 = new Bank(102, 'Veda', 12345);
var cust3 = new Bank(101, 'Vaishu', 123456);
console.log(cust1.custid, cust1.custname, cust1.custaccountnumber);
console.log(cust2.custid, cust2.custname, cust2.custaccountnumber);
console.log(cust3.custid, cust3.custname, cust3.custaccountnumber);
console.log(cust1.getSavingDeposit());
console.log(cust2.getReccuringDeposit());
console.log(cust3.getFixedDeposit());
