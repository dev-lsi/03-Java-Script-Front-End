function convertNumbertoMonth(number) {
 
    switch(number){
        case 1 : month ='January'; printMonth(month); break;
        case 2 : month ='February'; printMonth(month); break;
        case 3 : month ='March'; printMonth(month); break;
        case 4 : month ='April'; printMonth(month); break;
        case 5 : month ='May'; printMonth(month); break;
        case 6 : month ='Jun'; printMonth(month); break;
        case 7 : month ='July'; printMonth(month); break;
        case 8 : month ='August'; printMonth(month); break;
        case 9 : month ='September'; printMonth(month); break;
        case 10 : month ='October'; printMonth(month); break;
        case 11: month ='November'; printMonth(month); break;
        case 12: month ='December'; printMonth(month); break;
             
        default : return printMonth('error!');
    }
 
}

function printMonth(month){
    console.log(month);
}

convertNumbertoMonth(6);