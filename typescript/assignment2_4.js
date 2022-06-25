var e, x, d = 0;
var b = 153;
x = b;
while (x > 0) {
    e = x % 10;
    x = parseInt(x / 10);
    d = d + (e * e * e);
}
if (b == d) {
    console.log("given number is an armstrong number");
}
else {
    console.log("given number is not an armstrong number");
}
