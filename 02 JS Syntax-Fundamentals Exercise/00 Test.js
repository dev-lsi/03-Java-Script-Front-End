function test(number) {

    result = '';

    switch(number){
        case (number == 1) : result=`You've typed... ${number}`; break;
        case 2 : result=`You've typed... ${number}`; break;
         
        default: result='error';
    }

    console.log(result);

}

test(1);