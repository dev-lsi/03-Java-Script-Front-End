function addItem() {
    
    const itemTextInput = document.querySelector('#newItemText');
    const itemValueInput = document.querySelector('#newItemValue');
    const selectMenu = document.querySelector('#menu')

    if(!(itemTextInput.value===''||itemValueInput.value==='')){
     
        const newItem = document.createElement('option')
        newItem.text=itemTextInput.value;
        newItem.value=itemValueInput.value;
        selectMenu.appendChild(newItem);

        const options = Array.from(selectMenu)
        options.sort((a,b)=>((a.text).localeCompare(b.text)))
        selectMenu.innerHTML='';
        selectMenu.nextElementSibling
        options.forEach(option=>selectMenu.appendChild(option))
        
        
    }
    itemTextInput.value='';
    itemValueInput.value='';


}