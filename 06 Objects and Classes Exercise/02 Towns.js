class tableRow {
    constructor(town, latitude, longitude) {
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

function returnObjects(inputList) {

    const objArr = inputList.reduce((acc, curr) => {

        const city = curr.split(' | ')[0];
        const lat = Number(Number(curr.split(' | ')[1]).toFixed(2));
        const long = Number(Number(curr.split(' | ')[2]).toFixed(2));

    const currentRow = new tableRow(city, lat, long);
    acc.push(currentRow);
    return acc;

}, []);

objArr.forEach(element => {
    console.log(element);
    return element;
});


}

returnObjects(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);