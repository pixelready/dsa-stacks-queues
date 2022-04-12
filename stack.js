const LinkedList = require('./linked-list');

/** Node: node for a stack. */

class Node {
	val = null;
	next = null;

	constructor(val) {
		this.val = val;
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	top = null;
	size = 0;

	constructor() {
		this._linkedList = new LinkedList(vals);
	}

	/** push(val): add new value to the top of the stack. Returns undefined. */

	push(val) {
		this.top = val;
		this._linkedList.push(val);
	}

	/** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

	pop() {
		this.top = this._array[this._array.length - 1];
		return this._linkedList.pop();
	}

	/** peek(): return the value of the top node in the stack. */

	peek() {
		return this.top;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {}
}

module.exports = Stack;
