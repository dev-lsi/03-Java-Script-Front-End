function findSmallestNumber(...input){

  const sortedInput = input.sort((a,b)=>a-b);


   console.log(sortedInput[0]);
}

findSmallestNumber(8, 3, 6);