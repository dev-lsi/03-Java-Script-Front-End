function create(words) {

   const contentDiv = document.getElementById('content');
   
   words.forEach(word => {
       
      const newDiv = document.createElement('div');
      const newParagraph=document.createElement('p');
      newParagraph.innerText=word;
      newParagraph.style.display='none';
      newDiv.addEventListener('click', clicked)
      newDiv.appendChild(newParagraph);
      contentDiv.appendChild(newDiv);
   });
}

function clicked(e){

   const clickedDiv = e.target;
   clickedDiv.firstChild.style.display='block';

}