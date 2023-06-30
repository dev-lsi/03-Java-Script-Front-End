function checkSignOfMultiplication(...input) {

    let message = '';
    
    const numberOfNegativeElements = input.filter(x => x < 0).length;

    (numberOfNegativeElements === 0 || numberOfNegativeElements % 2 === 0)
        ? message = 'Positive'
        : message = 'Negative';

    
        console.log(message);

}

checkSignOfMultiplication(2, -4, -6);