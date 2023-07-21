function extractText() {
    const resultText = document.querySelector('#result');
    
    const listItems = Array.from(document.querySelectorAll('li'))
                      .map(e => (e.innerText));
    
    
    const result = listItems.reduce((acc,curr)=>{
        acc=acc + '\n' +curr;
        return acc;
     },'')

     resultText.textContent= result.trim()

}