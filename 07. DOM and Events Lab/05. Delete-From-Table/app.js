function deleteByEmail() {

    const searchWord = document.querySelector("input[name=email]").value;
    console.log(searchWord)
    const  tableCells = Array.from(document.querySelectorAll('td'));
    console.log(tableCells)
    tableCells.forEach(cell=>{
        
        const currCellValue = cell.textContent;
        const isMatch = currCellValue.includes(searchWord)
        if(searchWord===''){
            return;
        }
        else if(isMatch){

            cell.parentElement.remove();
            searchWord='';
        }
        
    })


    
}