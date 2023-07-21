function focused() {

    const inputs =
        Array.from(document.querySelectorAll('input[type=text]'));
       

    inputs.forEach(input => {
        
        input.addEventListener('focus', changeFocus)
        input.addEventListener('focusout', changeFocus)
    })

    function changeFocus(e){
       
      if(e.type==='focus'){
         e.target.parentElement.classList.add('focused');
      }else if(e.type === 'focusout'){
        e.target.parentElement.classList.remove('focused');
      }

    }


}