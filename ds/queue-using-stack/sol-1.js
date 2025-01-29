class MyQueue {
    constructor() {
        this.stack1 = []; // For enqueueing
        this.stack2 = []; // For dequeueing
    }

    push(x) {
        this.stack1.push(x);
    }

    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Sample Execution:

const queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.peek();   // returns 1
queue.pop();    // returns 1
queue.empty();  // returns false

// Solution Explanation:
// The key idea is to use two stacks.  stack1 is used for pushing elements, and stack2 is used for popping and peeking.  When you need to dequeue, you transfer all elements from stack1 to stack2 (reversing their order).  This makes the top of stack2 the front of the queue.

// Time Complexity:  push() is O(1) amortized. pop(), peek(), and empty() are O(1).  The transfer of elements between stacks happens only when stack2 is empty, and its cost is spread out over multiple pop() operations.

// Space Complexity: O(n) where n is the number of elements in the queue.
