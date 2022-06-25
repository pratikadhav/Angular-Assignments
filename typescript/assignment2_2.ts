var arr:number[]=[23,6,7,4,5,7];

function summation(numArray)
{
    var s:number=0
    for(var i=0; i<numArray.length; i++){
        s= s +numArray[i];
    }   
    console.log("Addition is :"+s);
}
summation(arr);
