const res = {
  code: 0,
  data: {
    lines: '20路,301路,5路,地铁5号线,机场大巴线,107路,机场快轨',
    lineids: 'lzbd,lwes,lxid,lwic,lwdf,ldfx,loin',
    linedetails: {
      lwdf: {
        name: '机场大巴线'
      },
      lwes: {
        name: '301路'
      },
      lwic: {
        name: '地铁5号线'
      },
      ldfx: {
        name: '107路'
      },
      lzbd: {
        name: '20路'
      },
      lxid: {
        name: '5路'
      },
      loin: {
        name: '机场快轨'
      }
    }
  }
};
// 从字符串中提取出连续的数字或者返回字符串的长度
function takeNumFromString(str,len){
  if(len){
    return str.length;
  }
  let numStr = '';
  for(let i = 0; i < str.length; i++){
    if(!isNaN(str[i])){
      numStr += str[i]; 
    }
    if(!isNaN(str[i]) && isNaN(str[i + 1])){
      return parseInt(numStr);
    }
  }
}
// console.log(takeNumFromString('fjewiojf23455rty'));
function insertInto(arr, newItem, len){
  if(arr.length === 0){
    arr.push(newItem);
    return;
  }
  for(let i = 0; i < arr.length; i++){
    if(i === arr.length - 1){
      if(takeNumFromString(arr[i].name, len) > takeNumFromString(newItem.name, len)){
        arr.unshift(newItem);
      }else{
        arr.push(newItem);
      }
      return;
    }
    if(takeNumFromString(newItem.name, len) < takeNumFromString(arr[i].name, len) && takeNumFromString(newItem.name, len) > takeNumFromString(arr[i+1].name, len)){
      arr.splice(i + 1,0,newItem);
      return;
    }
  }
}

function parse(res){
  const {linedetails} = res.data;
  const linedetailsArr = [];
  // 1. 转成数组
  for(let i in linedetails){
    linedetailsArr.push({
      name: linedetails[i].name,
      key: i  
    });
  }
  //   console.log(linedetailsArr);
  // 2. 分成三类
  const baseLines = []; // 基础路线
  const subwayLines = []; // 地铁路线
  const otherLines = []; // 其他路线

  const baseReg = /^\d+路$/;
  const subwayReg = /^地铁\d+号线$/;
  linedetailsArr.forEach(item => {
    if(baseReg.test(item.name)){
      // 按照顺序插入
      insertInto(baseLines,item,false);
      return;
    }
    if(subwayReg.test(item.name)){
      // 按照顺序插入
      insertInto(subwayLines,item,false);
      return;
    }
    insertInto(otherLines,item,true);
  });
  /*eslint-disable no-console*/
  //   console.log(baseLines);
  //   console.log(subwayLines);
  //   console.log(otherLines);

  // 3. 拼接三个数组
  return [...baseLines,...subwayLines,...otherLines].map(item => {
    return {
      [item.key]: {
        name: item.name
      }
    };
  });
}

console.log(parse(res));