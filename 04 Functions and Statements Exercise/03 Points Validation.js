//[x1, y1, x2, y2]
//{x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2};

function checkAllDistances([x1, x2, y1, y2]) {

    const isDistanceValid = (x1, y1, x2, y2) => {
        
        const distance = Math.sqrt((x1 - x2)**2 + (y1- y2)**2);
        const result = Number.isInteger(distance) ? `${x1}, ${y1} to ${x2}, ${y2} is valid` : `${x1}, ${y1} to ${x2}, ${y2} is invalid`;

        return result;
    };

    const distances = {
        d1: isDistanceValid(0, 0, x1, y1),
        d2: isDistanceValid(0, 0, x2, y2),
        d3: isDistanceValid(x1, y1, x2, y2)
    }
    
    

   for (const key in distances) {

        console.log(distances[key]);
   }


}

checkAllDistances([3, 0, 0, 4]);
checkAllDistances([2, 1, 1, 1]);