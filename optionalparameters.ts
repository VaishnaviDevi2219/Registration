function Example1(a:number,b?:number,c?:string){
    console.log(a)
    console.log(b)
    console.log(c)

}
Example1(1)
Example1(1,2,'vaishu')
Example1(1,2)

// by using class

class Example2{
    add(x:number,y?:string){
    console.log(x)
    console.log(y)
    }
}
let p=new Example2();
p.add(2)
p.add(2,'vaishu')



