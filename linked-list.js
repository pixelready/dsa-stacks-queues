/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      const secondToLast = this.tail;
      secondToLast.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      const newSecond = this.head;
      this.head = newNode;
      this.head.next = newSecond;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error('This LinkedList is empty!');
    }

    if (this.length === 1) {
      const oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldTail.val;
    } else {
      const oldTail = this.tail;
      let current = this.head;

      while (current !== oldTail) {
        if (current.next === oldTail) {
          this.tail = current;
          current.next = null;
          this.length--;
          return oldTail.val;
        }
        current = current.next;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error('This LinkedList is empty!');
    }

    if (this.length === 1) {
      const oldHead = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldHead.val;
    } else {
      const oldHead = this.head;
      this.head = oldHead.next;
      this.length--;
      return oldHead.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx > this.length - 1) {
      throw new Error("That's not a valid index, my guy!");
    }

    let currIdx = 0;
    let current = this.head;

    while (currIdx < this.length) {
      if (currIdx === idx) {
        return current.val;
      }
      currIdx++;
      current = current.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx > this.length - 1) {
      throw new Error("That's not a valid index, my guy!");
    }

    let currIdx = 0;
    let current = this.head;

    while (currIdx < this.length) {
      if (currIdx === idx) {
        current.val = val;
      }
      currIdx++;
      current = current.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length + 1) {
      throw new Error("That's not a valid index, my guy!");
    }

    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    let currIdx = 0;
    let current = this.head;

    while (currIdx < this.length) {
      console.log('tail:', this.tail, 'length:', this.length, 'currIdx:', currIdx);

      if (currIdx === idx - 1) {
        let nodeBefore = current;
        newNode.next = nodeBefore.next;
        nodeBefore.next = newNode;

        if (idx === this.length + 1) {
          this.tail = newNode;
        }

        this.length++;
        return;
      }

      currIdx++;
      current = current.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (idx < 0 || idx > this.length) {
      throw new Error("That's not a valid index, my guy!");
    }

    if (this.length === 1) {
      const soloNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return soloNode;
    }

    let currIdx = 0;
    let current = this.head;

    while (currIdx !== idx) {

      if (currIdx === idx - 1) {
        const beforeNode = current;
        const nodeToRemove = current.next;
        const afterNode = current.next.next;
        if (afterNode === null) {
          this.tail = beforeNode;
        } else {
          this.tail = afterNode;
        }
        beforeNode.next = afterNode;
        this.length--;
        return nodeToRemove;
      }
      currIdx++;
      current = current.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {

    if (this.length === 0) {
      return 0;
    }

    let current = this.head;
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
      sum += current.val;
      current = current.next;
    }

    const avg = sum / this.length;
    return avg;

  }
}

/**
 * -if linkedlist has nothing in it (+ if you wanna add to empty LL)
 * -if you removed from LL with one node
 * -removing 2nd to last node
 * -removing 1st node
 * -removing last node
 */

module.exports = LinkedList;
