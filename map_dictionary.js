const map = new Map()
map.set(5,2)
console.log(map.get(5));

///////////// character occurance
const str = "Hackerrank"
const occurance = {}
for(let i=0; i<str.length; i++){
    let count = occurance.get(str[i]) ?? 0
    count++
    occurance.set(str[i],count)
}
occurance.forEach((value, key)=>{
    console.log(`${key.toLowerCase()} occures ${value} times.`);
})