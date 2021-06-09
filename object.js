var bank={
    customerName:'vaishu',
    customerContactNo:8919067101,
    customerAddress:{
        street:'kmr',
        colony:'vidhya',
        postalcode:679803
    },
    customerBankdetails:{
        IFSC:67809483290,
        pin:4556
    },
}
console.log(bank)
console.log(bank.customerName) 

var str1="vaishu"
var str2=new String("vaishu")
console.log(str1==str2)
console.log(str2===str1) 

function details(first,second){
    this.firstname=first
    this.secondname=second
}
var information=new details('vaishu','devi') 
console.log(information.firstname,information.secondname)


