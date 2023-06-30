function rotateArray(arr,rotations) {

    
    const result = arr.slice(0,arr.lenght);

    for (let i = 0; i < rotations; i++) {

        result.push(result.shift());
        
    }
    console.log(result);


}

rotateArray([1,2,3,4,5], 2);