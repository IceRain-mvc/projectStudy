/**
 * 实现二分查找算法
 * 如下有个数组  arr
 * arr元素都是数字
 * 现在要查找数组中的某个元素
 * 请用二分查找算法实现
 */
/*eslint-disable no-unused-vars */
const arr = [1,2,3,4,5,6,7,8,9];
/**
  * 
  * @param {number} target 要查找的元素
  * @param {array} list 要查找的数组
  * @return {number} 返回该元素对应的索引 
  */
/*eslint-disable no-unused-vars */
function find(list, target){
  // 请编写逻辑（答案）
  let start = 0;
  let end = list.length - 1;
  while(start <= end){
    let middle = start + (end - start) / 2;
    if(list[middle] === target){
      return middle;
    }else if(list[middle] < target){
      start = middle + 1;
    }else{
      end = middle - 1;
    }
  }
}

/**
  * 请用一句代码随机打乱一个数组，数组如下：
  */
const nums = [2,6,8,1,5,9];

// 请实现要求（答案）
nums.sort(() => Math.random()*100-50);



/**
  * 实现一个event类
  * 可以任意添加该类的成员属性或者方法，
  * 实现on方法的逻辑
  * 实现emit方法的逻辑
  * 最终按照下方的调用能够展示正确的结果
  */

class Event{
  /* 答案 */
  constructor(){
    this.events = {};
  }
  on(type,listener){
    // 实现该方法逻辑(答案)
    if(!Array.prototype.isPrototypeOf(this.events[type])){
      this.events[type] = [];
    }
    this.events[type].push(listener);
  }
  emit(){
    // 实现该方法逻辑(答案)
    this.events[type].forEach((item) => {
      if(item.onlyOnce){
        if(item.active){
          item(...reset);
          item.active = false;
        }
      }else{
        item(...reset);
      }   
    });
  }
}

let ev = new Event();

ev.on('first', () => {
  console.log('first-console-1');
});

ev.on('second', () => {
  console.log('second-console-1');
});

ev.on('first', () => {
  console.log('first-console-2');
});
ev.on('second', () => {
  console.log('second-console-2');
});

ev.emit('first'); // first-console-1  first-console-2
ev.emit('second'); // second-console-1 second-console-2