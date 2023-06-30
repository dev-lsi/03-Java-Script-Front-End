function sortArray(arr) {
  
    const sortedArr= arr.slice(0,arr.lenght);

    sortedArr.sort(function(a,b) { return (a-b)});

    sortedArr.forEach(element => {
        console.log(element);
    });

}

sortArray(["d'John", "Bob", "Christina", "Ama"]);