/*eslint-disable no-console */
function Person(str){
  if(!Person.prototype.isPrototypeOf(this)){
    return new Person(str);
  }
  this.tasks = [];
  this.init(str);
  setTimeout(() => {
    this.run();
  },0);
}
Person.prototype.append = function(task,reset){
  this.tasks.push({task,reset});
};
Person.prototype.insertFront = function(task,reset){
  this.tasks.unshift({task,reset});
};
Person.prototype.run = async function(){
  for(let task of this.tasks){
    await task.task(task.reset);
  }
};
Person.prototype.init = function(str){
  async function task(str){
    console.log(`This is ${str}`);
  }
  this.append(task,str);
};
Person.prototype.setPromise = function(callback){
  return new Promise(reslove => {
    callback(reslove);
  });
};
Person.prototype.sleep = function(time){
  const that = this;
  async function task(time){
    await that.setPromise((reslove) => {
      setTimeout(() => {
        reslove();
      },time);
    });
    console.log(`sleep after ${time}`);
  }
  this.append(task,time);
  return this;
};
Person.prototype.sleepFirst = function(time){
  const that = this;
  async function task(time){
    await that.setPromise(reslove => {
      setTimeout(() => {
        reslove();
      },time);
    });
    console.log(`sleep before ${time}`);
  }
  this.insertFront(task,time);
  return this;
};
Person.prototype.eat = function(eadtd){
  async function task(eadtd){
    console.log(`eat ${eadtd}`);
  }
  this.append(task,eadtd);
  return this;
};
Person('li').sleep(1000).sleep(2000).sleepFirst(5000).eat('dinner').sleep(1000).eat('food');





