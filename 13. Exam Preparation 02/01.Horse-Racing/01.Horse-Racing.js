function solve([horsesString,...rows]){

    const horses = horsesString.split('|').reverse();
    

    for (let i = 0; i < rows.length; i++) {

        const row = rows[i].split(' ');
        const command=row[0];

        if(command==='Finish'){

            console.log(`${horses.reverse().join('->')}`);
            console.log(`The winner is: ${horses.reverse()[0]}`);
            break;
        }
        //Retake {overtaking-horse} {overtaken-horse}
        if(command === 'Retake'){

            const taking=row[1];
            const takingIndex=horses.indexOf(taking);
            const taken=row[2];
            const takenIndex=horses.indexOf(taken);

            if(takingIndex - takenIndex>0){
                horses[takingIndex]=taken;
                horses[takenIndex]=taking;
                console.log(`${taking} retakes ${taken}.`);
            }
        }
        //Trouble {horse-name}
        if(command ==='Trouble'){

            const horse = row[1];
            const index=horses.indexOf(horse);
            if(index<horses.length-1){
                horses[index]=horses[index+1];
                horses[index+1]=horse;
                console.log(`Trouble for ${horse} - drops one position.`)
            }
            

        }
        //Rage {horse-name}
        if(command==='Rage'){
            let counter=0;
            const horse=row[1];
            let index = horses.indexOf(horse);
            for (let i = 0; i < 2; i++) {
                
                if(index>0){
                    horses[index]=horses[index-1];
                    horses[index-1]=horse;
                    index--;
                    counter++;
                }

            }
            if(counter===2){
                console.log(`${horse} rages 2 positions ahead.`);
            }

            

        }
        //Miracle
        if(command==='Miracle'){
            const horse = horses.pop();
            horses.unshift(horse);
            console.log(`What a miracle - ${horse} becomes first.`);
        }

        
        
        
    }

}

solve(['Ruby|Lilly|fancy','Rage Lilly']);