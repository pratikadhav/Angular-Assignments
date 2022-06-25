// optional arguments
function Demo(no1, no2) {
    console.log("inside");
    console.log("value1:" + no1);
    if (no2 != undefined) {
        console.log("value2:" + no2);
    }
}
Demo(10, 11);
Demo(10);
