
function sumFirstAndLastElement(input){

    if(input.length===0){

        console.log('the array is empty');
        return;

    }

    const arr = input.slice(0 , input.length);

    const firstElement = arr.shift();
    console.log(firstElement);
    const lastElement  = arr.pop();
    console.log(lastElement);

    const sum = firstElement+lastElement;
    console.log(sum);

}

sumFirstAndLastElement([1,2,3,4,5]);