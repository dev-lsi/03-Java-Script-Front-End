/*
0-2 (age) – is a baby;
3-13 (age) – is a child;
14-19 (age) – is a teenager;
20-65 (age) – is an adult;
>=66 (age) – is an elder;

else 'out of bounds;
*/

function determineAgeType(age) {

    let ageType = '';
    
    if (age < 0) {

        ageType = 'out of bounds';

    } else if (age >= 0 && age <= 2) {

        ageType = 'baby';

    } else if (age <= 13) {

        ageType = 'child';

    } else if (age <= 19) {

        ageType = 'teenager';

    } else if (age <= 65) {

        ageType = 'adult';

    } else if (age >= 66) {

        ageType = 'elder';

    }


    console.log(ageType);

}

//determineAgeType(100);