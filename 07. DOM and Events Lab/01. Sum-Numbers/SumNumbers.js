function calc() {
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    const sum = Number(num1.value) + Number(num2.value);

    document.querySelector('#sum').value=sum;
    num1.value='';
    num2.value='';

    
    
}


