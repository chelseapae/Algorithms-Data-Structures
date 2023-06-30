class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if (this.length === 0) return undefined
    let poppedNode = this.tail;
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  //remove node from beginning
  shift(){
    if (this.length === 0) return undefined;
    let prevHead = this.head;
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = prevHead.next;
      this.head.prev = null;
      prevHead.next = null;
    }
    this.length--;
    return prevHead;
  }

  //Add a node to the beginning of the list
  unshift(val){
    let newNode = new Node(val);
    if (this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //access a node and returns it
  get(index){
    if(index < 0 || index >= this.length) return null;
    if(index <= this.length/2) {
      var count = 0;
      var current = this.head;
      while(count != index){
        current = current.next;
        count++;
      }
    } else {
      var count = this.length - 1;
      var current = this.tail;
      while(count != index){
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  //replace the value of a node
  set(val, index){
    let foundNode = this.get(index)
    if (foundNode !== null){
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  //Add a node in a certain position
  insert(val, index){
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
}