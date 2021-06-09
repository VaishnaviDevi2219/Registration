function weekp(){
    var day=Number(document.getElementById('week').value)
    console.log(day)

switch(day){
case 1:console.log('Monday')
break;
case 2:console.log('Tueday')
break;
case 3:console.log('Wed')
break;
case 4:console.log('Thur')
break;
case 5:console.log('Fri')
break;
case 6:console.log('Sat')
break;
default:console.log('Sun')
break;
}
}
