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

	constructor(vals) {
		this._linkedList = new LinkedList(vals);
		this.top = this._linkedList.head;
	}

	/** push(val): add new value to the top of the stack. Returns undefined. */

	push(val) {

		this._linkedList.unshift(val);
		this.top = this._linkedList.head;
		this.size++;
		return;
	}

	/** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

	pop() {

		if(this.size === 0){
			throw new Error("Nothing here to pop, homie!");
		}

		this.top = this._linkedList.head;
		this.size--;
		return this._linkedList.shift();
	}

	/** peek(): return the value of the top node in the stack. */

	peek() {
		return this.top.val;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = Stack;
