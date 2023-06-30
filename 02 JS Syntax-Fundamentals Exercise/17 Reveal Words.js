function reveal(words, text) {
    
    wordsArr = words.split(', ');
   
    
    for (let i = 0; i < wordsArr.length; i++) {
        
        let currWord=wordsArr[i];
        let len = currWord.length;
        let template = '*'.repeat(len);
        

        text = text.replace(template, currWord);
    }

    console.log(text);
    

}

reveal('great, learning', 'softuni is ***** place for ******** new programming languages');