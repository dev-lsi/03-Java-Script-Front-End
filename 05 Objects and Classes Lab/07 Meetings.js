function makeSchedule(arr) {
    
    const schedule = arr.reduce((acc, curr) => {

        const [day, name] = curr.split(' ');

        if (!acc.hasOwnProperty(day)){
             
            acc[day]=name;
            console.log(`Scheduled for ${day}`);
            return acc;

        }else if(acc.hasOwnProperty(day)){
            
            console.log(`Conflict on ${day}!`);
            
        }
        
        return acc;
        
    },{});

    console.log(`ZZZZZ ${JSON.stringify(schedule)}`);
};

makeSchedule(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])