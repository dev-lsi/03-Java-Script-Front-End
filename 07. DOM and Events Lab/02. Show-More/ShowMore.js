function showText() {

    const textSpan = document.getElementById('text');
    const linkAnchor = document.getElementById('more');

    if(textSpan.style.display === 'none'){

        textSpan.style.display='block';
        linkAnchor.textContent='Show less...'
        
    }else if(textSpan.style.display==='block'){
        
        textSpan.style.display='none';
        linkAnchor.textContent='Read more ...'
        
    }


   


}