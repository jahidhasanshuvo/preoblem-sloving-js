const isSubstring = (mainString, subString) => {
    let subStringFound = false
    for(let i =0; i<= (mainString.length - subString.length); i++){
        var left = 0;
        while(left<subString.length){
            if(mainString[i+left]!= subString[left]){
                break
            }
            left++            
        }
        if(left==subString.length){
            return true
        }
    }
    return false
}
console.log(isSubstring("abcdefgh","bcde"));