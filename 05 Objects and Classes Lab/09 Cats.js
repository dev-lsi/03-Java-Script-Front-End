

function createCats(catsList){

    function sayMeow(cat){
        console.log(`${cat.name} ${cat.age} says meow` );
    }

    const cats=catsList.reduce((acc,curr)=>{

        const[name,age] = curr.split(' ');
        const currCat = {name,age};
        acc.push(currCat);
        return acc;

    },[]); 

    cats.forEach(cat => {
        sayMeow(cat)
    });


}

createCats(['Candy 1', 'Poppy 3', 'Nyx 2']);