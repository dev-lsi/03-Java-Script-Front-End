function solve(commands) {

    const carsInParking = [];

    commands.forEach(row => {

        const command = row.split(', ');

        const direction=command[0];
        const carNumber=command[1];


        if(direction==='IN'){
            
            carsInParking.push(carNumber);
            //console.log(`car: ${carNumber} added`)

        }
        else if(direction === 'OUT'){

          //const filtered = carsInParking.filter(x => x !== carNumber);
          const index = carsInParking.findIndex(x => x === carNumber);
          carsInParking.splice(index,1);
          //console.log(`car: ${carNumber} removed`)
        }



        
    });

    if(carsInParking.length===0){

        console.log('Parking Lot is Empty');

    }else{

        carsInParking.sort((a,b)=>a.localeCompare(b)).forEach(x=>console.log(x));

    }
    


}



solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);