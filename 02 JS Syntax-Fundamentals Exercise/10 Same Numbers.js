function isEqualAllDigits(number) {

    let numberString = String(number);

    let digit = Number(numberString[0]);

    isEqual = true;

    let sum = 0;

    for (let i = 0; i < numberString.length; i++) {

        const element = Number(numberString[i]);

        if (element !== digit) {

            isEqual = false;
            break;

        } else {

            sum += digit;
            
        }
    }

    // Output
    if (isEqual === true) {

        console.log(sum);

    } else {

        console.log('not equql');
    }
}

isEqualAllDigits(222);