var radius = 5;
var pi = 3.14;
var areaOfCircle = 0;
function area(value1, value2) {
    var area1 = 0;
    area1 = value2 * value1 * value1;
    return area1;
}
areaOfCircle = area(radius, pi);
console.log("Area of circle is :" + areaOfCircle);
