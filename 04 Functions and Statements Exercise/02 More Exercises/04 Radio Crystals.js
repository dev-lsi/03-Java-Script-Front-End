const operations = {
    "Cut": (currTicknes) => { return currTicknes / 4; },
    "Lap": (currTicknes) => { return currTicknes * 0.8; },
    "Grind": (currTicknes) => { return currTicknes - 20; },
    "Etch": (currTicknes) => { return currTicknes - 2; },
    "X-Ray": (currTicknes) => { return currTicknes + 1; },
    "Transporting and washing": (currTicknes) => { return Math.trunc(currTicknes) }
}


function processCristals([goalWidth,...cristals]) {

    cristals.forEach(cristal => {
        
        
        const results = process(cristal,goalWidth);
       
        printResults(results);
    });
    
};


function process(currWidth,goalWidth) {

    const results = {
        'Cut': 0,
        'Lap': 0,
        'Grind': 0,
        'Etch': 0,
        'X-Ray': 0,
        'Transporting and washing': 0,
    };

    for (const currOperation in operations) {
     
        while(currWidth > goalWidth){
            console.log(`currWidth=${currWidth}`)
            
            let currResultWidth = operations[currOperation](currWidth);

            if(currResultWidth < goalWidth){
                operations['Transporting and washing'](currWidth);
                console.log(`${operations[currOperation]} skipped`);//debug
                
            }else{
                
                currWidth = currResultWidth;
                results[currOperation]+=1;
                console.log(`${operations[currOperation]} done ${results[currOperation]}`); //debug
            }

        }

    }

    return results;
}

function printResults(objectToPrint){
 for(el in objectToPrint){
    if(objectToPrint[el]!==0){
        console.log(objectToPrint[el]);
    }
 }
}






processCristals([1375, 50000]);
processCristals([1000, 4000, 8100]);