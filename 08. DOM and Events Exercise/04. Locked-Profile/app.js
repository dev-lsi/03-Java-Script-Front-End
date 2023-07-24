function lockedProfile() {

    const buttons = Array.from(document.querySelectorAll('.profile button'));

    buttons.forEach(button => {

        button.addEventListener('click', changeInfo)
    });

    function changeInfo(e) {

        const currButton = e.target;
        const currProfile = currButton.parentElement;

        const isUnlockedProfile = isUnlocked(currProfile);
       
        
        if(isUnlockedProfile === 'unlock'){
             
            changeState(currProfile);
        }

    }

    function isUnlocked(profile){
        let result=0;
        const radioButtons  = Array.from(profile.querySelectorAll('input[type=radio]'));
        radioButtons.forEach(radio => {

           
            if(radio.checked){
                
                result = radio.value;
               
            }
        });

        return result;
    }

    function changeState(profile){
     
        let btnText = profile.querySelector('button').innerText;
        const infoDiv = profile.querySelector('div');
        
        if(btnText === 'Show more'){

            profile.querySelector('button').innerText = 'Show less';
            infoDiv.style.display = 'block';

        }else{

            profile.querySelector('button').innerText ='Show more';
            infoDiv.style.display = 'none';

        }
        
    }

    
}