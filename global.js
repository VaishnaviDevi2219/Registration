// // function getmyage(){
// //     var Age=document.getElementById('myage').value
// //     var x=(Age<20)?"eligible":"not eligible"
// //     console.log(x)
// // }

// // g=30;
// // function firstFunction(){
// //     a=10;
// //     console.log(a);
// //     console.log(g);
// // }
// // function sf(){
// //     b=20;
// //     console.log(b);
// //     console.log(g);
// // }
// // firstFunction()
// // sf()
function add(){
    var x=Number(document.getElementById('x').value)
    var y=Number(document.getElementById('y').value)
     z=x+y;
    document.getElementById('result').value=z;
}
function sub(){
    var x=document.getElementById('x').value;
    var y=document.getElementById('y').value;
     z=x-y;
    document.getElementById('result').value=z;
}
function mul(){
    var x=document.getElementById('x').value;
    var y=document.getElementById('y').value;
     z=x*y;
    document.getElementById('result').valueL=z;
}
function div(){
    var x=document.getElementById('x').value;
    var y=document.getElementById('y').value;
     z=x/y;
    document.getElementById('result').value=z;
}

// var courses(){
//     document.getElementById('text').value
//     if(courses=='java'){
//         console.log('true')
//     }
//     else if(course=='.net'){
//         console.log('true1')
//     }
//     else{
//         console.log('false')
//     }
// }