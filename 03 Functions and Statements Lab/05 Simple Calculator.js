const divide = (x, y) => x / y;
const multiply = (a, b) => a * b;
const sum = (a, b) => a + b;

function calculate(num1, num2, operator) {

    const calculator = {
        sum,
        multiply,
        divide
    }

    console.log(calculator[operator](num1, num2));


}

calculate(2, 5, 'sum');      //7
calculate(12, 6, 'divide');  //2
calculate(2,8, 'multiply');  //16