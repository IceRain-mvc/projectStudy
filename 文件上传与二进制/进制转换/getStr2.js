/**
 * 
 * @param {string} singleStr [单个字符的字符串]
 * @return {array} [该字符的十进制编码所组成的数组] 
 */
function toStr10(str) {
  if(typeof str !== 'string'){
    throw new Error('参数类型不正确');
  }
  return str.split('').map((item, key) => {
    return str.charCodeAt(key);
  });  
}
/**
 * 
 * @param {number} number [要转进制的数字] 
 * @param {number} system [被转换成的目标进制]
 * @return {string} [转换成功的字符串表示]
 */
function systemTrans(number,system) {
  if(isNaN(number)){
    throw new Error('第一个参数要求是数字类型的');
  }
  const nums = [2,8,10,16]; // 二进制 0b开头   八进制  0开头   十六进制  0x开头
  if(nums.indexOf(system) === -1){
    throw new Error('进制不正确');
  }
  return number.toString(system);
}
