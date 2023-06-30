/*
chop - divide the number by two
dice - square root of a number
spice - add 1 to the number
bake - multiply number by 3
fillet - subtract 20% from the number
*/


function solve(input, ...operations) {

    const inputNumber = Number(input);
    const arr = operations.slice(0, operations.length);
    result = inputNumber;

    arr.forEach(element => {
        result = makeOperation(element, result);
        
        //Next row can be used for debugging!
        //console.log(`${element}: ${result}`);
    });

    console.log(result);

}

function makeOperation(operation, number) {
    switch (operation) {
        case 'chop': number = number / 2; break;
        case 'dice': number = number = Math.sqrt(number); break;
        case 'spice': number = number + 1; break;
        case 'bake': number = number * 3; break;
        case 'fillet': number = (number * 0.8).toFixed(1); break;
    }

    return number;
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('10','fillet','chop');