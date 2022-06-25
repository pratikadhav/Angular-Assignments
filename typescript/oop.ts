//Object oriented programming(oop)

//class definition
class Arithematic
{
    //characteristics
    No1:number;
    No2:number;

    //default constructor and parametrised constructor
    constructor(a:number,b:number)//constructor call for 2 times 
    {
        this.No1=a;
        this.No2=b;
        // console.log("Inside Constructor");
    }

    Add()//behaviour
    {
        var Ans:number=0;//local var
        Ans=this.No1+this.No2;
        return Ans;
    }
    
    Substraction()//behaviour
    {
        var Ans:number=0;//local var
        Ans=this.No1-this.No2;
        return Ans;
    }
}

var obj1 = new Arithematic(10,11);//object create kela, memory alocate//call back function
var obj2 = new Arithematic(20,21);//1class ani tyache 2 objects



var Ret:number=0;
Ret=obj1.Add();
console.log("Add is"+Ret);

Ret=obj1.Substraction();
console.log("Substraction is"+Ret);

//kay karaycha ahe ? (Behaviours/Functions)
//Add & Sub
//Te karanysathi kay lagnar ahe?(charactersitics/variable)
//2 number value and 1 ans thevayla

