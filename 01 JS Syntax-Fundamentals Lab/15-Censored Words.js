function censoreText(inputText, censoreWord) {

    const arr = inputText.split(" ").forEach(element => {

        if(element === censoreWord){
            element = "*".repeat(censoreWord.length);
            console.log(element);
            console.log(arr);
        }
    });

    console.log(arr);


}

censoreText("as das fas let november fas rain fas", "fas");