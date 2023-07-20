function solve(text) {

    const words = convertTextToArray(text);
    const keysArr = findKeys(words);
    const wordCountArr = createTuples(keysArr, words);
    printResult(wordCountArr);



}

function printResult(objArr) {
    const result=[];
    objArr.forEach(el => {

        if ((el.count) % 2 !== 0) {
           result.push(el.word);
        }

    });

    console.log(result.join(' '));

}


function createTuples(keys, words) {
    const wordCountArr = [];
    keys.forEach(key => {

        let count = 0;

        words.forEach(word => {
            if (word === key) {
                count++;
            }
        });

        wordCountArr.push({ word: key, count: count });
    });

    return wordCountArr;



}

function findKeys(arr) {

    const keysArr = [];

    for (let i = 0; i < arr.length; i++) {

        const curWord = arr[i];
        let isAlreadyAKey = false;

        keysArr.forEach(key => {
            if (key === curWord) {
                isAlreadyAKey = true;
            }
        });

        if (!isAlreadyAKey) {
            keysArr.push(curWord);
        }

    }


    return keysArr;

}


function convertTextToArray(text) {
    const textArr = text.split(' ');

    const words = [];

    textArr.forEach(element => {
        const lowerCaseWord = element.toLowerCase();
        words.push(lowerCaseWord);

    });

    return words;
}



solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');  // c# php 1 5

solve('Cake IS SWEET is Soft CAKE sweet Food'); //  soft food