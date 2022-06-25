var no1:number=23;
var no2:number=89;
var no3:number=6;
var ans:number=0;


function maximum(value1:number,value2:number,value3:number):number
{
    var ans1:number=0;
    ans1=Math.max(value1,value2,value3);
    return ans1;
}


ans=maximum(no1,no2,no3);
console.log("Maximum number is :" +ans);

