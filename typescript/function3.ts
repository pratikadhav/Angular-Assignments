var no1:number = 10;//create variable 
var no2:number = 11;// create 2nd var
var ret :number = 0;// ret for return value is 0
//global scope ahe ya vaible cha i.e global variable

ret=addition(no1,no2);//function call and parameter yach sequence ne janar  
console.log("Addition is:"+ret);
function addition(value1:number, value2:number):number // Function ahe he 
{
    var ans:number =0;// local variable fakt block cha aat aslela data type number value dili zero 
    ans=value1+value2;// arithmatic statement Addition keli he dukan ahe ani ghiraikala return kela pahije
    return ans;// jyane funtion call kelay tyacha kade gela 
}

//tsc funtion3.ts
// node 