var num = 20;
var ans = 0;
function displayFactor(value1) {
    var i = 1;
    for (i = 1; i <= value1; i++) {
        if (value1 % i == 0) {
            console.log(i);
        }
    }
}
displayFactor(num);
