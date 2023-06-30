function sumDigits(number) {

    let digitsString = String(number);
    let sum = 0;

    for (let i = 0; i < digitsString.length; i++) {

        currentChar = digitsString[i];
        currentDigit = Number(currentChar);
        sum += currentDigit;

    }

    console.log(sum);

}

//sumDigits(12345);