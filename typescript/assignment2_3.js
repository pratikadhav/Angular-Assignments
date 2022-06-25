var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var ans = 0;
function summation(numArray) {
    var second_highest = numArray.sort(function (a, b) { return b - a; })[1];
    return second_highest;
}
ans = summation(arr);
console.log("Second Maximum number is:" + ans);
