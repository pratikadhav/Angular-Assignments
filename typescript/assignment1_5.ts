var num:number=21;

function fibonacci(value)
{
   var no1 =0;
   var no2 =1,nextNo;
   var i=1;
    for(i = 1; i <= value; i++)
    {
       console.log(no1);
       nextNo=no1+no2;
       no1=no2;
       no2=nextNo;
    }          
}

fibonacci(num);