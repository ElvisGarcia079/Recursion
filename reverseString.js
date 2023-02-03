function reverseStr(str){
    if(str.length <= 1){
        return str;
    }

    //If I want to reverse the string I want to: 
        // Take the last character of the string and concatenate it with the rest of the original string reversed (minus the last character)
    
    let lastCharacterPosition = str.length - 1;
    return str.charAt(lastCharacterPosition) + reverseStr(str.substring(0, lastCharacterPosition));
}

console.log(reverseStr("Elvis"))