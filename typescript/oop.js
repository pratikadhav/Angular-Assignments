//Object oriented programming(oop)
//class definition
var Arithematic = /** @class */ (function () {
    //default constructor and parametrised constructor
    function Arithematic(a, b) {
        this.No1 = a;
        this.No2 = b;
        // console.log("Inside Constructor");
    }
    Arithematic.prototype.Add = function () {
        var Ans = 0; //local var
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Substraction = function () {
        var Ans = 0; //local var
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(10, 11); //object create kela, memory alocate//call back function
var obj2 = new Arithematic(20, 21); //1class ani tyache 2 objects
var Ret = 0;
Ret = obj1.Add();
console.log("Add is" + Ret);
Ret = obj1.Substraction();
console.log("Substraction is" + Ret);
//kay karaycha ahe ? (Behaviours/Functions)
//Add & Sub
//Te karanysathi kay lagnar ahe?(charactersitics/variable)
//2 number value and 1 ans thevayla
