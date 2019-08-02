/*eslint-disable no-unused-vars */
function find(list,target){
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