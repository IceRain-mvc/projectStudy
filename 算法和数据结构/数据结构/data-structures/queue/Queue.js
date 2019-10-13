import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    //
    //
    // 基于链表的
    //
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   *
   * @return {*}
   */
  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   *
   * @param {*} value
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  /**
   *
   * @return {*}
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback) {
    //
    return this.linkedList.toString(callback);
  }
}
