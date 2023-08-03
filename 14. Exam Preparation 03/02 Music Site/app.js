window.addEventListener('load', solve);

function solve() {

    

    const songs = {};

    const inputs = {
        genre: document.querySelector('#genre'),
        name: document.querySelector('#name'),
        author: document.querySelector('#author'),
        date: document.querySelector('#date'),
    }

    selectors = {

        allHitsContainer:document.querySelector('.all-hits-container'),
        addBtn: document.querySelector('#add-btn')
    }

    selectors.addBtn.addEventListener('click', addSong);

    function addSong() {

       

        let hasEmptyFields = false;
        const keys = Array.from(Object.keys(inputs));

        if (keys.some(key => inputs[key].value === '')) {

            hasEmptyFields = true;
            return;

        } else {

            const song = createSong(inputs);
            createSongHTML(song);

        }
        function createSongHTML(song){
            //type,id,elementClass,textContent,parent

            const songDiv = createElement('div',null,['hits-info'],null,null);
            console.log(`${songDiv}`)
            const img=document.createElement('img');
            img.src='./static/img/img.png';
            songDiv.appendChild(img);

            createElement('h2',null,null,`Genre: ${song.genre}`,songDiv);
            createElement('h2',null,null,`Name: ${song.name}`,songDiv);
            createElement('h2',null,null,`Author: ${song.author}`,songDiv);
            createElement('h3',null,null,`Date: ${song.date}`,songDiv);
            createElement('button',null,['save-btn'],'Save song',songDiv);
            createElement('button',null,['like-btn'],'Like song',songDiv);
            createElement('button',null,['delete-btn'],'Delete song',songDiv);

            selectors.allHitsContainer.appendChild(songDiv);
            console.log(`${songDiv.innerHTML}`);

        }

        function createElement(type,id,elementClass,textContent,parent){

            const element = document.createElement(type);
            if(id){

               element.id=id;
            }
            if(elementClass){

                element.classList.add(...elementClass)

            }
            if(textContent){

                element.textContent=textContent;
            }
            if(parent){

                parent.appendChild(element);
            }

        }

        function createSong(inputs) {

            const newSong = keys.reduce((acc, key) => {

                acc[key] = inputs[key].value;
                return acc;

            }, {});

            songs[newSong.name] = newSong;
            return newSong;

        }
    }


}

