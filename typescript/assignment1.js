var no1 = 23;
var no2 = 89;
var no3 = 6;
var ans = 0;
function maximum(value1, value2, value3) {
    var ans1 = 0;
    ans1 = Math.max(value1, value2, value3);
    return ans1;
}
ans = maximum(no1, no2, no3);
console.log("Maximum number is :" + ans);
