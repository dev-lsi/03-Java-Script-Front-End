function splitByUppercase(text) {
    
    let arr=text.split('');
    let splitedString = '';
    let currentWord = '';
    let input=text;

    for (let i = 0; i < arr.length - 1; i++) {

        const currentLetter = arr[i];
        const nextLetter = arr[i + 1];

        if (isUpper(currentLetter) && i !== 0) {

            arr.splice(i,0," "); 

        }

        
    }

    return text;
}

function isUpper(a) {
    if (a >= 97 && a <= 122) {
        return false;
    }else {
        console.log(true); 
        return true;
    }
}

const splited = splitByUppercase('lachoMitkoRadoVenciCisco');

console.log(splited);