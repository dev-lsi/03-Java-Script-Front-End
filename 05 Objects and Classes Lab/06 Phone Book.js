function createPhoneBook(arr) {

    const phoneBook = arr.reduce((acc, element) => {
        const [key, value] = element.split(' ');
        acc[key] = value;
        return acc;
    }, {});

    Object.entries(phoneBook).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`);
    });



}

createPhoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);