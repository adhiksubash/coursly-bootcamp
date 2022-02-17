function multiply(number) {
    for(var i=1; i<=10; i++){
        let result = number * i;
        console.log(number,'*',i,'=',result);
    }
}

function add (num1,num2){
    let result = num1 + num2;
    console.log(result);
}

multiply(5);
multiply(6);
multiply(7);

add(2,3);
add(4,5);