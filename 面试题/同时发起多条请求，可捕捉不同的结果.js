const list = [1,5,12,49]
const logs = []; // 记录请求的结果和状态  {result:请求结果,id:要删除的id}
// 假设一个请求的方法
function requestDel(id){
    const time = Math.random()*3000 + 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = [false, true]
            const flag = Math.ceil(Math.random()*2);
            if(results[flag]){
                resolve(`删除${id}成功`);
            }else{
                reject(`删除${id}失败`);
            }
        },time);
    })
}
function checkLogs() { // 检查logs
    if(logs.length < list.length){
        return {
            isAllComplete: false,
            msg: '所有请求尚未完成'
        }
    }
    const success = logs.filter(item => {
        return item.result;
    });
    if(success.length === list.length){
        return {
            isAllSuccess: true,
            isAllComplete: true,
            msg: '所有请求都成功了'
        }
    }
    const fails = logs.filter(item => {
        return !item.result
    });
    return {
        isAllSuccess: false,
        isAllComplete: true,
        msg: '有部分请求失败',
        fails
    }
}

function getResult(){
    const checkResult = checkLogs();
    if(checkResult.isAllComplete){
        console.log(checkResult);
    }
}


function startRequest(){
    list.forEach(item => {
        requestDel(item).then(() => {
            logs.push({result: true, id: item})
            getResult();
        }).catch(() => {
            logs.push({result: false, id: item})
            getResult();
        })
    })
}
startRequest();
