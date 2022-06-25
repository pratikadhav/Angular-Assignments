function fun() {
    console.log("function inside");
}
fun();
function gun(no) {
    console.log("inside gun " + no);
}
gun(11);
function sun(no) {
    var i = no; //local veriable
    i++;
    return i;
}
var ret = 0;
var a = 10;
ret = sun(a);
console.log("return value is :" + ret);
