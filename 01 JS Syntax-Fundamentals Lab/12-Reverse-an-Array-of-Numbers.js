function reverseArray(input){

    const result=[];

    input.forEach(element => {
        result.unshift(element);
    });

    console.log(result);
}

reverseArray([1,2,3,4,5]);