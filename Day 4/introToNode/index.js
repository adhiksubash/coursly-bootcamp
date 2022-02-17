const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("What is your name? ",(answer)=>printAnswer(answer));

console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

function printAnswer(answer)
{
    console.log(`Hello ${answer}`);
    rl.close();
}   
