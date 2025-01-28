class Node {
    String url;
    Node prev;
    Node next;

    public Node(String url) {
        this.url = url;
    }
}

class BrowserHistory {
    Node head;
    Node current;

    public BrowserHistory(String homepage) {
        this.head = new Node(homepage);
        this.current = this.head;
    }

    public void visit(String url) {
        Node newNode = new Node(url);
        this.current.next = newNode;
        newNode.prev = this.current;
        this.current = newNode;
    }

    public String back(int steps) {
        while (steps > 0 && this.current.prev != null) {
            this.current = this.current.prev;
            steps--;
        }
        return this.current.url;
    }

    public String forward(int steps) {
        while (steps > 0 && this.current.next != null) {
            this.current = this.current.next;
            steps--;
        }
        return this.current.url;
    }
}

// Solution Explanation:

// Node Class:
// Represents a single URL in the history.
// Contains url to store the URL string.
// prev and next pointers to link to the previous and next nodes in the list.

// BrowserHistory Class:
// head: Points to the first node in the history (the starting page).
// current: Points to the currently visited node.

// Constructor:
// Initializes the head and current nodes with the homepage URL.
// visit(url) Method:

// Creates a new Node with the given url.
// Links the current node's next pointer to the new node.
// Links the new node's prev pointer to the current node.
// Updates current to point to the newly added node.

// back(steps) Method:
// Moves the current pointer steps times backward in the history.
// Prevents moving beyond the beginning of the history by checking if this.current.prev is not null.
// Returns the URL of the current node after moving back.

// forward(steps) Method:
// Moves the current pointer steps times forward in the history.
// Prevents moving beyond the end of the history by checking if this.current.next is not null.
// Returns the URL of the current node after moving forward.