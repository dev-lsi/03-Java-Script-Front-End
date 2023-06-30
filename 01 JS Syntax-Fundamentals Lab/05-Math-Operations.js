function calculate(number1, number2, operation) {
    
    switch(operation){
        case '+': console.log(`${(number1 + number2).toFixed(2)}`); break;
        case '-': console.log(`${(number1 - number2).toFixed(2)}`); break;
        case '*': console.log(`${(number1 * number2).toFixed(2)}`); break;
        case '/': console.log(`${(number1 / number2).toFixed(2)}`); break;
        case '%': console.log(`${(number1 % number2)}`); break;
        case '**': console.log(`${(number1 ** number2).toFixed(2)}`); break;

        default: return console.log('error!');
        
        
    }
}

calculate(3, 2, '%');