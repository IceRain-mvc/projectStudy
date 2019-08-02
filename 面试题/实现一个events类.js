/*eslint-disable no-unused-vars*/
class Event{
  constructor(){
    this.events = {};
  }
  on(type,listener){
    if(!Array.prototype.isPrototypeOf(this.events[type])){
      this.events[type] = [];
    }
    this.events[type].push(listener);
  }
  off(type){
    if(type){
      this.events[type] = [];
      return;
    }
    this.events = {};
  }
  once(type,listener){
    listener.onlyOnce = true;
    listener.active = true;
    this.on(type,listener);
  }
  trigger(type,...reset){
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