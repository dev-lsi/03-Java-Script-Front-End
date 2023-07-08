function getFactoriel(a) {

    let factoriel = 1;

    for (let i = 1; i <= a; i++) {
        factoriel *= i;
        console.log(factoriel);
    }

    return factoriel;
}

const divideFactorielOfNumbers = (x, y) => console.log((getFactoriel(x) / getFactoriel(y)).toFixed(2));



divideFactorielOfNumbers(5, 2);