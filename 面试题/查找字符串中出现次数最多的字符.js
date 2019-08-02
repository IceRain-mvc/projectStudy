const str = 'aaabbbcccdddd';
function findMostLetter(str){
    const obj = {}
    for(let i = 0; i < str.length; i++){
        if(i in obj){
            obj[i] += 1;
        }else{
            obj[i] = 0;
        }
    }
    let max = obj[str[0]];
    let maxAttr = str[0];
    for(let i in obj){
        if(obj[i] > max){
            max = obj[i];
            maxAttr = str[0];
        }
    }
    return maxAttr;
}
console.log(findMostLetter(str));