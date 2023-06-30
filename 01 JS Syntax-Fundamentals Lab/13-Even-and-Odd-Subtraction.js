function evenMinusOddElements(input) {
    
    let evenSum=0;
    let oddSum=0;

    input.forEach(element => {
        (element % 2 === 0) ? evenSum += element : oddSum += element;
    });

    const result = evenSum - oddSum;
    console.log(result);

}

evenMinusOddElements([1,,2,3,4,5,6]);