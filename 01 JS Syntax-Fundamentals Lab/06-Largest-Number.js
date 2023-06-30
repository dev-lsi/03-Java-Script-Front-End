function findLargestNumber(...input) {

    console.log(input);
    let firstElement = input.sort((a,b)=>{b-a}).unshift();
    
    console.log( `The largest number is ${firstElement}`);

}

findLargestNumber(7,3,5,2,7,8,4,5,9);