const arr = [];
function fillArr(){
    for(let i = 0; i < 100; i++){
        arr.push(String(Math.ceil(Math.random()*100)));
    }
}
function delRepeat(){
    return [...new Set(arr)];
}
fillArr(arr);
delRepeat(arr);
console.log(arr);


async function async1(){
    console.log('async start')
    await async2()
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}
console.log('script start')
setTimeout(function(){
    console.log('settimeout')
})
async1()
new Promise(function(resolve){
    console.log('promise1')
    resolve()
}).then(function(){
    console.log('promise2')
})
console.log('script end');