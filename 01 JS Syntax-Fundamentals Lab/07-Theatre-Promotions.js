function calculatePrice(dayType, personAge) {

    if (personAge <= 0 || personAge > 122) {
        console.log('wrong age');
        return;
    }

    let price;

    switch (dayType) {
        case 'holiday': price = holidayPrices(personAge);
        case 'weekend': price = weekendPrices(personAge);
        case 'weekday': price = weekdayPrices(personAge);
    }

    console.log(price);
}

function holidayPrices(personAge) {

    if (personAge <= 18) {
        price = 5;
    } else if (personAge >= 64) {
        price = 10;
    }
    else {
        price = 12;
    }

    return price;
}

function weekendPrices(personAge) {

    if (personAge <= 18) {
        price = 15;
    } else if (personAge >= 64) {
        price = 15;
    }
    else {
        price = 20;
    }

    return price;

}

function weekdayPrices(personAge) {

    if (personAge <= 18) {
        price = 12;
    } else if (personAge >= 64) {
        price = 12;
    }
    else {
        price = 18;
    }

    return price;

}

calculatePrice('weekday', 42);

