function printCityInfo(input) {

    Object.entries({ ...input }).forEach(([key, val]) => {
        console.log(`${key} -> ${val}`);
    });


}

printCityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});