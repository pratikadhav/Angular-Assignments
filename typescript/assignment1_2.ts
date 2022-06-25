var radius:number=5;
var pi:number=3.14;
var areaOfCircle:number=0;

function area(value1:number,value2:number){
    var area1:number=0;
    area1=value2*value1*value1;
    return area1;
}

areaOfCircle=area(radius,pi);
console.log("Area of circle is :" +areaOfCircle);