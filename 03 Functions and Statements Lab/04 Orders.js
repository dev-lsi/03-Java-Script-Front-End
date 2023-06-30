const productPrice = {
    coffee: 1.50,
    water: 1.00,
    coke: 1.40,
    snacks: 2.00
}

function calculateTotalPrice(product, quantity) {

    const totalPrice = productPrice[product] * quantity;
    return totalPrice.toFixed(2);
}

console.log(calculateTotalPrice('coffee', 2));