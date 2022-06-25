var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(a) {
        this.Pi = 3.14;
        this.Radius = a;
    }
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = this.Radius * this.Radius * this.Pi;
        return Ans;
    };
    return Circle;
}());
var Object1 = new Circle(5);
var Object2 = new Circle(10);
var ret = 0;
ret = Object1.Area();
// console.log("Area of circle is :"+ret);
ret = Object2.Area();
// console.log("Area of circle is :"+ret);
//Assignment Problem 3
var circleX = /** @class */ (function (_super) {
    __extends(circleX, _super);
    function circleX(a) {
        return _super.call(this, a) || this;
    }
    circleX.prototype.circumference = function () {
        var Ans = 0;
        Ans = 2 * this.Radius * this.Pi;
        return Ans;
    };
    return circleX;
}(Circle));
var Ob1 = new circleX(5);
var Ob2 = new circleX(10);
var ret = 0;
ret = Ob1.circumference();
console.log("Circumference of circle is :" + ret);
ret = Ob2.circumference();
console.log("Circumference of circle is :" + ret);
