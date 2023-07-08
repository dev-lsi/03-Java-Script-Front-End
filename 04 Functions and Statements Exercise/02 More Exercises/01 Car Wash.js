function washCar(commands) {
    
    let clean=0;

    const actions={
        soap: () => {clean+=10; return clean},
        water: ()=>{clean+=clean*0.2; return clean},
        "vacuum cleaner":()=>{clean+=clean*0.25; return clean},
        mud: ()=>{clean-=clean*0.10; return clean}
    }
    
    commands.forEach((x) => {clean=actions[x]();});

    //output
    console.log(`The car is ${clean.toFixed(2)}% clean.`);
    
}

washCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

washCar(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);