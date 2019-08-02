const bytes = 123456

function get(num,type){
    const t = Math.floor(num / 1024);
    const p = num % 1024
    return {
        t,
        str: `${p}${type}`
    };
}
function change(bytes){
    let typeArr = ['B','KB','MB','GB'];
    let arr = [];
    typeArr.reduce((item,type) => {
        let {t,str} = get(item,type);
        arr.push(str);
        return t;
    },bytes);
    console.log(arr);
}
change(bytes);