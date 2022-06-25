function main(): void //3,4,6
{
    var no: number = 11;
    var bret: boolean; //boolean datatype bret boolean return

    bret = CheckEven(no); //function call  camel case name 15 CheckEven(12)
    if (bret == true) {
        console.log("It is even number");
    }
    else {
        console.log("It is odd number");
    }

}
