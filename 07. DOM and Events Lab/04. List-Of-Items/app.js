function addItem() {

    const ul = document.querySelector('#items')
    const inputText = document.querySelector('#newItemText').value;
    const newLi=document.createElement('li');
    newLi.textContent=inputText;
    ul.appendChild(newLi);
    document.querySelector('#newItemText').value='';
}