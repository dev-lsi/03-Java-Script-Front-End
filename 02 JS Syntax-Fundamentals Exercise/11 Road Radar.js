
function checkSpeed(driverSpeed, area) {

    isOverLimit = false;
    let currStatus;

    areaMaxSpeed = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    currentAreaMaxSpeed = areaMaxSpeed[area];
    driverSpeed > currentAreaMaxSpeed ? isOverLimit = true : isOverLimit = false;
    const overSpeed = driverSpeed - currentAreaMaxSpeed;

    if (overSpeed <= 0) {
        console.log(`Driving ${driverSpeed} km/h in a ${currentAreaMaxSpeed} zone`);
    } else {

        overSpeed<=20 ? currStatus = 'speeding' :
        overSpeed<=40 ? currStatus = 'excessive speeding' :
        currStatus = 'reckless driving';

        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${currentAreaMaxSpeed} - ${currStatus}`);
    }





}

checkSpeed(120, 'city');


// `Driving {speed} km/h in a {speed limit} zone`

//`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`