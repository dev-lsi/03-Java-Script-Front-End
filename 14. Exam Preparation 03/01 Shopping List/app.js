function solve([groceriesStr, ...rows]) {

    const groceries = groceriesStr.split('!');
    
    const commands = {
        'Urgent': urgent,
        'Unnecessary': unnecessary,
        'Correct': correct,
        'Rearrange': rearange,
    }

    for (let i = 0; i < rows.length; i++) {

        const currRow = rows[i];

        if (currRow === 'Go Shopping!') {

            console.log(groceries.join(', '));
            break;

        } else {

            const [command, ...items] = currRow.split(' ');
            const old=groceries.slice(0);
            commands[command](items);
            //console.log(`${old} -> ${command}(${items}) -> ${groceries}`)
            
        }
    }


    function urgent(items) {
        if (groceries.includes(items[0])) {
            return;
        } else {
            groceries.unshift(items[0]);
        }
    }

    function unnecessary(items) {
       
        if (groceries.includes(items[0])) {
            const index=groceries.indexOf(items[0]);
            groceries.splice(index,1);
        }
    }

    function correct([oldItem,newItem]){

        if(groceries.includes(oldItem)){
            index=groceries.indexOf(oldItem);
            groceries[index] = newItem;
        }

    }

    function rearange(items){

        if(groceries.includes(items[0])){
           const index = groceries.indexOf(items[0]);
           groceries.splice(index,1);
           groceries.push(items[0]);
           
        }

    }


}

solve(['a', 'Urgent tomatoe', 'Go Shopping!', 'Urgent Krusha'])

solve(["Milk!Pepper!Salt!Water!Banana",

"Urgent morkovi",
"Unnecessary Pepper",
"Correct Pepper Onion",
"Rearrange morkovi",
"Correct morkovi Potatoes",
"Go Shopping!"])

