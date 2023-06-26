//implement a singly linked list

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    //returning this returns the whole list;
    return this;
  }

  pop(){
    if (!this.head) {
      return undefined;
    };

    var current = this.head;
    var newTail = current;

    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    //if there's one item on the list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){
    if (!this.head){
      return undefined;
    } else {
      var currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      return currentHead;
    }
  }

  unshift(val){
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //takes in an index and returns the val in that index
  get(index){
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  //changing the value of a node given its position
  set(index, val){
    let foundNode = this.get(index);
    if (foundNode){
      foundNode.val = val;
      return true;
    }
    return false;
  }

  //Add a node to a specified index
  insert(index, val){
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val)
    if (index === 0) return this.unshift(val)

    let newNode = new Node(val);
    let prev = this.get(index) - 1;
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

