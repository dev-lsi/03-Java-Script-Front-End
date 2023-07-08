function oddAndEvenSum(input) {

    const arr = input.toString().split('');
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < arr.length; i++) {

        let element = arr[i];

        element % 2 === 0 ? evenSum += Number(element) : oddSum += Number(element);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(12345) //odd=9 even=6