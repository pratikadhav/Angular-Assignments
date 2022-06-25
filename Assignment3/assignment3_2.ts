class Circle{

    Radius:number;
    Pi:number=3.14;

    constructor(a:number)
    {
        this.Radius=a;
    }

    Area()//behaviour
    {
        var Ans:number=0;
        Ans=this.Radius*this.Radius*this.Pi;
        return Ans;
    }
}
var Object1 = new Circle(5);
var Object2  = new Circle(10);
var ret:number=0;
  
ret=Object1.Area();
console.log("Area of circle is :"+ret);

ret=Object2.Area();
console.log("Area of circle is :"+ret);


//Assignment Problem 3
class circleX extends Circle
{
    constructor(a:number)
    {
        super(a)
    }
    circumference()
    {
        var Ans:number=0;
        Ans=2*this.Radius*this.Pi;
        return Ans;
    }
    
}

var Ob1 = new circleX(5);
var Ob2  = new circleX(10);
var ret:number=0;

ret=Ob1.circumference()
console.log("Circumference of circle is :"+ret);
ret=Ob2.circumference()
console.log("Circumference of circle is :"+ret);

