const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cars = [];

function readCarData() {
    const car = {};
    rl.question('Enter the car model number: ', (modelNumber) => {
        car.modelNumber = modelNumber;
        rl.question('Enter the car make: ', (make) => {
            car.make = make;
            rl.question("Enter the car make year ",(year) => {
                car.year = year;
                cars.push(car);
                if(cars.length<2){
                    readCarData(); //recursion
                }
                else{
                    rl.close();
                    console.log(cars);
                }
            })
        });
    });
}

exports.readExportedCars = readCarData;