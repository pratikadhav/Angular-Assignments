// Procedure oriented programming
//pop
function Add(No1:number,No2:number)
{
    var Ans:number=0;
    Ans=No1+No2;
    return Ans;
}
function Substraction(No1:number,No2:number)
{
    var Ans:number=0;
    Ans=No1-No2;
    return Ans;
}
var Value1:number=10;
var Value2:number=11;
var Ret:number=0;

Ret=Add(Value1,Value2);
console.log("Add is"+Ret);

Ret=Substraction(Value1,Value2);
console.log("Substraction is"+Ret);

//pop pratek goshti sathi process