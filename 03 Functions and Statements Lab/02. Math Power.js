function calculatePower(number,power){

    let result = number;

    if(power === 0){
        
        result=1;
        
    }  else if(number===0){

        result = 0;

    } else {

        for (let i = 1; i < power; i++) {
        
        result = result*number;

        };

    }

    console.log(result);
    

}

calculatePower(2,5);