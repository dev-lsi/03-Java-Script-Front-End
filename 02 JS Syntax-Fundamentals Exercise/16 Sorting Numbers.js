function sortSmalestBiggest(inputArr) {



    const smallest = inputArr.slice(0);
    const biggest = inputArr.slice().sort(function (a, b) { return b - a });
    console.log(`${inputArr}`);
    console.log(smallest);
    console.log(biggest);

    result = [];

    for (let i = 0; i < inputArr.length / 2; i++) {

        result.push(smallest[i]);
        result.push(smallest[inputArr.length - 1 - i]);

    }

    if (inputArr.length % 2 !== 0) {

        result.pop();
    }

    console.log(result);

}

sortSmalestBiggest([1, 2, 3, 4, 5, 6, 7, 8]);