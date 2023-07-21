function addItem() {

    const input = document.querySelector('#newItemText');
    
    if (!(input.value === '')) {

        const newItem = document.createElement('li');
        const liParagraph = document.createElement('p');
        liParagraph.innerText = input.value;
        const liAnchor = document.createElement('a');
        liAnchor.setAttribute('href', '#');
        liAnchor.innerText = '[Delete]'
        
        newItem.appendChild(liParagraph);
        newItem.appendChild(liAnchor);
        liAnchor.addEventListener('click',deleteItem);

        const ul = document.querySelector('#items');
        ul.appendChild(newItem);

        input.value = '';
    }
}

function deleteItem(e){
    e.target.parentElement.remove();
}

    
