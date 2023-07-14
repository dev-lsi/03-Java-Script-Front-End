function convertToObject(input) {
const resultObj=JSON.parse(input);
Object.keys(resultObj).forEach((key)=>{
    console.log(`${key}: ${resultObj[key]}`);
})
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')