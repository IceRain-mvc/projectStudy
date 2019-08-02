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

/**
 * [{
  lxid: {
    name: '5路'
  }
}, {
  lzbd: {
    name: '20路'
  }
}, {
  ldfx: {
    name: '107路'
  }
}, {
  lwes: {
    name: '301路'
  }
}, {
  lwic: {
    name: '地铁5号线'
  }
}, {
  loin: {
    name: '机场快轨'
  }
}, {
  lwdf: {
    name: '机场大巴线'
  }
}]

 */

function parseBaseNum(baseStr){ // 解析出基础路线的数字
  return Number(baseStr.slice(0,baseStr.length - 1));
}

function parseSubwayNum(subwayStr){ // 解析地铁路线的数字
  return Number(subwayStr.slice(2,subwayStr.length - 2));
}

function insertObj(line, newItem, parse){
  let index = 0;
  for(let i = 0; i < line.length; i++){
    if(parse(line[i].name) > parse(newItem.name)){
      index = i;
      break;
    }
  }
  if(index === 0){
    line.unshift(newItem);
  }else{
    line.splice(index - 1, 0, newItem);
  }
}
function insertOterObj(line, newItem){
  let index = 0;
  for(let i = 0; i < line.length; i++){
    if(line[i].name.length > newItem.name.length){
      index = i;
      break;
    }
  }
  if(index === 0){
    line.unshift(newItem);
  }else{
    line.splice(index - 1, 0, newItem);
  }
}
function parse(res) {
  const {linedetails} = res.data;
  // 把linedetails转成一个数组
  let linedetailsArr = Object.keys(linedetails).map(item => {
    return {
      key: item,
      name: linedetails[item].name
    };
  });
    // console.log(linedetailsArr);
    // 把不同类型的路线分别放到数组中；
  const baseLine = [],baseReg = /^\d+路$/;
  const subwayLine = [],subwayReg = /^地铁\d+号线$/;
  const otherLine = [];
  linedetailsArr.forEach(item => {
    if(baseReg.test(item.name)){
      insertObj(baseLine, item, parseBaseNum);
      return;
    }
    if(subwayReg.test(item.name)){
      insertObj(subwayLine,item,parseSubwayNum);
      return;
    }
    insertOterObj(otherLine, item);

  });
  // console.log(baseLine);
  // console.log(subwayLine);
  // console.log(otherLine);
  return baseLine.concat(subwayLine).concat(otherLine).map(item => {
    return {
      [item.key]: {
        name: item.name
      }
    };
  });
}
/*eslint-disable no-console */
console.log(parse(res));