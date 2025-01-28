// Doubly Linked List Approach

class Node {
    constructor(url) {
      this.url = url;
      this.prev = null;
      this.next = null;
    }
  }
  
  class BrowserHistory {
    constructor(homepage) {
      this.head = new Node(homepage);
      this.current = this.head;
    }
  
    visit(url) {
      const newNode = new Node(url);
      this.current.next = newNode;
      newNode.prev = this.current;
      this.current = newNode;
    }
  
    back(steps = 1) {
      while (steps > 0 && this.current.prev) {
        this.current = this.current.prev;
        steps--;
      }
      return this.current.url;
    }
  
    forward(steps = 1) {
      while (steps > 0 && this.current.next) {
        this.current = this.current.next;
        steps--;
      }
      return this.current.url;
    }
  }

// Advantages of Using a Doubly Linked List:

// Efficient back() and forward() Operations: Doubly linked lists allow for constant time (O(1)) movement in both directions.
// No Need to Clear Forward History: Unlike the array-based solution where we needed to truncate the array on visit(), the doubly linked list automatically handles the forward history.
// When you visit a new URL, the previous nodes become inaccessible from the current node.