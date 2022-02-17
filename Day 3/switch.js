let a = 4;

switch (a) {
    case 0:
        console.log("a is 0");
        break;
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    case 3:
        console.log("a is 3");
        break;
    default:
        console.log("a is not 0,1,2,3");
        break;
}

//conditional statement

let conditional = (a==0)?("a is 0"):("a is not 0");
console.log(conditional);

if(a==0){
    console.log("a is 0");
}
else {
    console.log("a is not 0")
}

a= 0; // = assignment operator
a==0; // == comparison operator
a===0; // === comparison operator -> strict equality operator