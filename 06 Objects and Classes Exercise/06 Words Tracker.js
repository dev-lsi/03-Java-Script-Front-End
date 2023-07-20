function trackWords([words,...textWords]){
const trackingList=[];
    
    const wordsToTrack = words.split(' ');
    
    wordsToTrack.forEach(word => {
        
        const w={
            name:word,
            count:0
        }

       
        
        trackingList.push(w);
    });

    textWords.forEach(word => {
        
        trackingList.forEach(trackedWord=>{
            if(trackedWord.name===word){
                (trackedWord.count)+=1;
            }
        })

         
    });

    trackingList.sort((w1,w2)=>(w2.count-w1.count));
    

    trackingList.forEach(w => {
        console.log(`${w.name} -> ${w.count}`);
    });


    

    


}

trackWords([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);

    trackWords([
        'is the',
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);