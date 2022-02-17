function calculateEven(number) {
    if(number%2==0){
        console.log(number);
    }
}

// using for Loop
for (let i = 1; i <= 6; i++) {
   calculateEven(i);
}

//while loop
let j = 1;
while(j<=6){
    calculateEven(j);
    j++;
}

//do while loop
let k=1;
do{
    calculateEven(k);
    k++;
}while(k<=6);
