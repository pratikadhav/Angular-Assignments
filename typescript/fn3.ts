//default arguments


function Demo(no1:number, no2:number=20, no3:number=30)
{
    console.log("inside" +no1,+no2);
}
Demo(10);
Demo(10,11);
Demo(10,11,12);