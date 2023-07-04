function printInRange(char1,char2){

const range = [char1.charCodeAt(0),char2.charCodeAt(0)].sort((a,b)=>a-b);

const firstChar=range[0];
const lastChar=range[1];
const resultArr=[];

for (let i = firstChar + 1; i < lastChar; i++) {
    
    const element = i;
    resultArr.push(String.fromCharCode(element));
    
}

console.log(resultArr.join(' '));

}

printInRange('#',':');