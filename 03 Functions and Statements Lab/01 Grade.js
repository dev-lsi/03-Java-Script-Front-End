

function formatGrade(grade) {
    
    let result='';   
    
     grade < 3.00 ? result='Fail'
    : grade < 3.50 ? result='Poor'
    : grade < 4.50 ? result='Good'
    : grade < 5.50 ? result='Very Good'
    : result='exelent';
    
    console.log(`${result} (${grade})`);
    
}

formatGrade(3.33);