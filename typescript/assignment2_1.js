var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var ans1 = 0;
function maximum(numArray) {
    var ans = 0;
    ans = Math.max.apply(Math, (numArray));
    return ans;
}
ans1 = maximum(arr);
console.log("Maximum number is :" + ans1);
