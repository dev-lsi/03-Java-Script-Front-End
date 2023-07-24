function toggle() {
    
    const btn = document.getElementsByClassName('button')[0];
    const extra = document.getElementById('extra');

    

    if(btn.innerText==='MORE'){
        
        btn.innerText='Less';
        extra.style.display='block';

    }else if(btn.innerText==='LESS'){

        btn.innerText='More';
        extra.style.display='none';


    }


    

}