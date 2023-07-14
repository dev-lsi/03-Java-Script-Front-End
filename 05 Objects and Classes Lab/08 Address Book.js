function makeAdressBook(arr) {
    
    const book = arr.reduce((acc,curr)=>{
     const [name,address]=curr.split(':');
     acc[name]=address;
     return acc;
    },{});
    console.log()

    const namesArr = Object.keys(book);
    

    namesArr.sort();
   

    namesArr.forEach(personName=>{
      console.log(`${personName} -> ${book[personName]}`);
    });


  
}

makeAdressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

makeAdressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);