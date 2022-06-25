var num = 11;
function checkPrime(value) {
    var i = 2;
    var isPrime = true;
    for (i = 2; i <= value; i++) {
        if (value % i == 0) {
            isPrime = false;
            break;
        }
        if (isPrime == true) {
            console.log("It is prime number");
        }
        else {
            console.log("It is not prime number");
        }
    }
}
checkPrime(num);
