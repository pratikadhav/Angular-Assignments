class Arithmetic
{
    No1:number;
    No2:number;
    constructor(a:number,b:number)
    {
        this.No1=a;
        this.No2=b;
    }
    Add()//behaviour
    {
        var Ans:number=0;
        Ans=this.No1+this.No2;
        return Ans;
    }
    Subtraction()//behaviour
    {
        var Ans:number=0;
        Ans=this.No1-this.No2;
        return Ans;
    }
    Multiplication()//behaviour
    {
        var Ans:number=0;
        Ans=this.No1*this.No2;
        return Ans;
    }
    Division()//behaviour
    {
        var Ans:number=0;
        Ans=this.No1/this.No2;
        return Ans;
    }
}
var obj1 = new Arithmetic(10,11);
var obj2 = new Arithmetic(20,21);
var Ret:number=0;
console.log("******1st Object Values*****")
Ret=obj1.Add();
console.log("Add is :" +Ret);
Ret=obj1.Subtraction();
console.log("Subtraction is :"+Ret);
Ret=obj1.Multiplication();
console.log("Multiplication is :"+Ret);
Ret=obj1.Division();
console.log("Division is :"+Ret);


console.log("******2nd Object Values*****")
Ret=obj2.Add();
console.log("Add is :" +Ret);
Ret=obj2.Subtraction();
console.log("Subtraction is :"+Ret);
Ret=obj2.Multiplication();
console.log("Multiplication is :"+Ret);
Ret=obj2.Division();
console.log("Division is :"+Ret);