const initArr = [
    [1,2,3],
    [4,5,6]
]

function change(initArr){
    const newArr = [];
    initArr[0].forEach((item, key) => {``
        const itemArr = [];
        initArr.forEach(val => {
            itemArr.push(val[key]);
        })
        newArr.push(itemArr);
    });
    return newArr;
}

console.log(change(initArr));
