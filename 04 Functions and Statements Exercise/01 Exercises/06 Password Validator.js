/*"Password must be between 6 and 10 characters"
"Password must consist only of letters and digits"
"Password must have at least 2 digits"*/
const outputMessages=[];

function validateLength(text) {
   if(text.length<6||text.length>10){
    return true;
   }else{
    outputMessages.push('Password must be between 6 and 10 characters');
    return  false;
   }
}

function validateContent(text) {

    

}

function validateDigitsCount(text) {

}

function ValidatePassword(text) {

    
    validateLength(text);
    validateContent(text);
    validateDigitsCount(text);



    if ((validateLength & validateContent & validateDigitsCount)){
        console.log('Password is valid');
    }else{
         console.log(outputMessages.join('\n'));
    }

    
    

}

ValidatePassword('pass123');


