//Regular function

var ret:number=0//global
function Addition1(No1:number,No2:number):number
{
    var ans:number=0;//local
    ans= No1+No2;
    return ans;
}
ret=Addition1(10,11);
console.log("Addition is :"+ret);

//Anonymous function(function without name)
var Addition2=function(No1:number,No2:number):number
{
    var ans:number=0;//local
    ans= No1+No2;
    return ans;
}
ret=Addition2(10,11);
console.log("Addition is :"+ret);
//Fat arrow /Lambda/Arrow function

var Addition3=(No1:number,No2:number):number=>
{
    var ans:number=0;//local
    ans= No1+No2;
    return ans;
}
ret=Addition3(10,11);
console.log("Addition is :"+ret);