function calculateCircleArea(input){

    let inputType = typeof input

    if(inputType!='number'){
        console.log(`wrong input type. Must be a number not a ${inputType}`);
        return;
    }

    const circleArea = Math.PI*input**2;
    
    console.log(`the area of the circle is ${circleArea}`);

}

calculateCircleArea(10);