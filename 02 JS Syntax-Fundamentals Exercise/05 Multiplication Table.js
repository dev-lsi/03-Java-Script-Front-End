//{number} X {times} = {product}

function multiplicateNumber(number){
    for (let i = 0; i < 10; i++) {
    
        const product = number*(i+1);
        console.log(`${number} X ${i+1} = ${product}`);
        
    }
}

//multiplicateNumber(200);