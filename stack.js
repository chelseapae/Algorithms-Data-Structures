//LIFO - last in first out
//can use push+pop or unshift+shift in arrays to create a "stack"
//or, can create one, for example using a linked list

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}