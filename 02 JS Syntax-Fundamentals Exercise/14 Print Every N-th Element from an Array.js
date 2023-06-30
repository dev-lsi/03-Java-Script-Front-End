function printEveryNthElement(inputArray,number) {
     
    const result=[];

    for (let i = 0; i < inputArray.length; i+=number) {
        
        const element = inputArray[i];
        result.push(element);
        
    }

    return result;
}



console.log(printEveryNthElement(['1','2','3','4','5','6'],2));
