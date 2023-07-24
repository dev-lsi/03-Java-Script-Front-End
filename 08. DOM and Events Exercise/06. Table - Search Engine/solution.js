function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      

      const inputField = document.querySelector('#searchField');
      const searchWord = inputField.value;
      const tableBodyRows=Array.from(document.querySelectorAll('table tbody tr'));

      tableBodyRows.forEach(row=>{
         row.classList.remove('select');
      })


      if(searchWord === ''){
         return;
      }
      

      const cells = Array.from(document.querySelectorAll('tbody tr td'));
      cells.forEach(cell=>{
         
         const isMatch = (cell.textContent).includes(searchWord);
         
         if(isMatch){
           
            const row= cell.parentElement;
            row.classList.add('select');
            inputField.value='';
         }


      });




   }
}