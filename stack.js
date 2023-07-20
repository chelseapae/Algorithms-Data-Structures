//LIFO - last in first out
//can use push+pop or unshift+shift in arrays to create a "stack"
//or, can create one, for example using a linked list

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0
  }

  push(val){
    let newNode = new Node(val);
    if (this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
    //return ++this.size;
  }

  pop(){
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}