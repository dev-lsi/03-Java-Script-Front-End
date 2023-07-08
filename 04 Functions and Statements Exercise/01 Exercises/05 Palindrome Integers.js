function isPalindrome(input) {

    for (let el = 0; el < input.length; el++) {
        
        let isNumberPalidrome = true;
        let number=input[el];
        const rightText = number.toString().split('');
        const leftText = rightText.slice(0, rightText.length).reverse();

        for (let i = 0; i < rightText.length; i++) {

            if (rightText[i] !== leftText[i]) {

                isNumberPalidrome = false;
                break;
            }

        }

        console.log(isNumberPalidrome);

    }


}

isPalindrome([1234]);  //false
isPalindrome(1221);  //true