// Procedure oriented programming
//pop
function Add(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Substraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var Value1 = 10;
var Value2 = 11;
var Ret = 0;
Ret = Add(Value1, Value2);
console.log("Add is" + Ret);
Ret = Substraction(Value1, Value2);
console.log("Substraction is" + Ret);
