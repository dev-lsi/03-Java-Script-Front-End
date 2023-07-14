class Song{
    constructor(typeList, name, time){
        this.typeList=typeList;
        this.name=name;
        this.time=time;
    }
}

function printSongs(input){
  
    const songsCount = input.shift(0);
    const command = input.pop(input.length-1);
    const songsListArr = input.slice();
    
    const songsList = songsListArr.reduce((acc,curr)=>{

        const currSongInfo=curr.split('_');
        const currSong = new Song(currSongInfo[0],currSongInfo[1],currSongInfo[2]);
        acc.push(currSong);
        return acc;
    },[]);

    console.log(songsList.forEach(song => {
        
        if(song.typeList===command){
            console.log(song.name);
        }
    }));
    
 
    
}

printSongs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);