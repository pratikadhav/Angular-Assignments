function fun()
{
 console.log("function inside");
}

fun();


function gun(no:number)
{
    console.log("inside gun "+no);
}
gun(11);

function sun(no:number):number
{
    var i:number=no;//local veriable
    i++;
    return i;
}

var ret: number=0;
var a: number=10;
ret=sun(a);
console.log("return value is :" +ret);