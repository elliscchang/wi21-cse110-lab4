let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

//for...in loop
for (let car in statistics) {
    //print value if name of car starts with 'r' or if value is odd
    if (car[0] === 'r' || statistics[car] % 2 === 1) {
        console.log(`${statistics[car]}`);
    }
}