const arr1 = [1,2,2,3,3,1]
const arr2 = [2,2,1,1,3,3]
function group(arr){
    const newArr = [];
    arr.forEach(item => {
        let result = newArr.find(val => val.includes(item));
        if(result){
            result.push(item);
        }else{
            newArr.push([item]);
        }
    });
    return newArr;
}
function isCommon(arr1,arr2){
    const groupArr1 = group(arr1);
    const gruopArr2 = group(arr2);
    if(groupArr1.length !== gruopArr2.length){
        return false;
    }
    return groupArr1.every(item => {
        return gruopArr2.find(val => item.length === val.length && item[0] === val[0]);
    })
}

console.log(isCommon(arr1,arr2));