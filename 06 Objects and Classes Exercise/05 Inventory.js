function solve(input){
    
    const heroesList = createHeroesList(input);

    heroesList.sort((a,b)=>(a.level-b.level));
    
    printHeroes(heroesList);
}

function createHeroesList(input){
    
    const heroesList = input.reduce((acc,curr)=>{
        
        const newHero = createHero(curr);
        acc.push(newHero);
        return acc;

    },[]);
    return heroesList;
}

function printHeroes(heroes){

    heroes.forEach(hero => {

        console.log(`Hero: ${hero['Hero']}`);
        console.log(`level => ${hero['level']}`);
        console.log(`Items => ${hero['Items'].join(', ')}`);

    });
};

function createHero(heroData){
    
    const arr = heroData.split(' / ');
    const itemsList=arr[2].split(', ');

    const newHero = {
        'Hero':arr[0],
         level:Number(arr[1]),
        'Items':itemsList
    }
    
    return newHero;
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);

