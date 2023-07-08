function isPerfectNumber(num) {

    sum = 0;

    for (let divisor = 1; divisor < num; divisor++) {

        if (num % divisor === 0) {
            sum += divisor;
        }

    }

    

    const printMessage1 = () => console.log('We have a perfect number!');
    const printMessage2 = () => console.log("It's not so perfect.");

    (sum === num) ? printMessage1() : printMessage2();

}

isPerfectNumber(6);