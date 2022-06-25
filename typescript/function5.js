function main() {
    var no = 11;
    var bret; //boolean datatype bret boolean return
    bret = CheckEven(no); //function call  camel case name 15 CheckEven(12)
    if (bret == true) {
        console.log("It is even number");
    }
    else {
        console.log("It is odd number");
    }
}
function CheckEven(value) {
    if ((value % 2 == 0)) // jar// expression value mod 2 mod operator devision 
     {
        return true; //6
    }
    else // nahitar
     {
        return false;
    }
}
main(); //1
