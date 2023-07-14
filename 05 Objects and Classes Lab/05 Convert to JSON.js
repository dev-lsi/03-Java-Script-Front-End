function convertToJSON(firstName, lastName, HairColor) {

    const person = {
        firstName,
        lastName,
        HairColor
    };
    
    console.log(JSON.stringify(person));

}

convertToJSON('George', 'Jones', 'Brown');