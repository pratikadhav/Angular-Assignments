//loop:for, while, do-while



function seq():void
{
    console.log("Hlleoo");
    console.log("Hlleoo");
    console.log("Hlleoo");
    console.log("Hlleoo");
    console.log("Hlleoo");
}
function iter():void
{
    var i:number=0;
    for(i=1;i<=5;i++)
    {
        console.log("For Hello");
        console.log("Hello");
    }
}
function iter_while():void
{
    var i:number=1;
    while(i<=5)
    {
        console.log("Whilw Hello");
        console.log("Hello");
        i++;
    }
}



// seq();
// iter();
iter_while();