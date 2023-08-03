class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
        var current = this.root;
        while(true){
          if (value === current.value) return undefined;
          if (value < current.value){
            if(current.left === null){
              current.left = newNode;
              return this;
            } else {
              current = current.left;
            }
          } else if(value > current.value) {
            if(current.right === null) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
          }
        }
    }
  }

  find(value){
    if (this.root === null) return false;
    var current = this.root;
    var found = false;

    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  breadthFirstSearch(){
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(node);
    while(queue.length){
      node = queue.shift();
      //data.push(node.value) <- same thing, but easier to see
      data.push(node);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }

  //depth first search pre-order (visit everything left as a cluster, then right)
  DFSPreOrder(){
    var data = [];
    var current = this.root;

    function traverse(node){
      //data.push(node.value) -> same thing, just easier to see values
      data.push(node);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  //depth first search post-order (visit bottom up, left to right. Root is the last visited)
  DFSPostOrder(){
    var data = [];
    var current = this.root;

    function traverse(node){
      //data.push(node.value) -> same thing, just easier to see values
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node);
    }

    traverse(current);
    return data;
  }
};

