function printAndSum(startNumber,endNumber) {

    const resultArray = [];
    let sum=0;

    for (let i = startNumber; i <= endNumber; i++) {
         
       resultArray.push(i);
       sum+=i;
        
    }


    console.log(resultArray.join(' '));
    console.log(`Sum: ${sum}`);

}

printAndSum(1,5);