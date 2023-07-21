function sumTable() {
    
  const tableRows = Array.from(document.querySelectorAll('tr'));
  tableRows.pop();
  tableRows.shift();
  
  const sum = tableRows.reduce((acc,row)=>{
   
    acc+=Number(row.lastChild.innerText);
    return acc;
  },0)
   
  const resultCell = document.querySelector('#sum');
  resultCell.textContent=sum;
  
}