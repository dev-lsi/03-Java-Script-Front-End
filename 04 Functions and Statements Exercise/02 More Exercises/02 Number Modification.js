
function modifyNumber(number) {

    currentNumber = number.toString();

    isModified(currentNumber) ? console.log(currentNumber) : modifyNumber(currentNumber + '9');

    function isModified(num) {
        
        let sum = 0;

        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }

        const average = sum / num.length;

        return average > 5 ? true : false;

    }
}


modifyNumber(101);

modifyNumber(5835);