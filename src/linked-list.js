class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(value) {
      const newNode = {
      value,
      next: null,
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  removeHead() {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }

  contains(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === val) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;