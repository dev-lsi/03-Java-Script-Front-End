//`I need ${money} to buy {weight} kilograms {fruit}.`

function calculatePrice(product, quantityInGrams, pricePerKilo) {

    const quantityInKilograms = quantityInGrams / 1000;
    let price = quantityInKilograms * pricePerKilo;
    
    console.log(`I need $${price.toFixed(2)} to buy ${quantityInKilograms.toFixed(2)} kilograms ${product}.`);

}

calculatePrice('orange', 2500, 1.80);

