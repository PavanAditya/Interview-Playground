class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeKLists(lists) {
    const minHeap = new MinPriorityQueue({ // Or a suitable min-heap implementation
        compare: (a, b) => a.val - b.val
    });

    for (const head of lists) {
        if (head) {
            minHeap.enqueue(head);
        }
    }

    const dummyHead = new ListNode();
    let current = dummyHead;

    while (!minHeap.isEmpty()) {
        const node = minHeap.dequeue().element;
        current.next = node;
        current = node;

        if (node.next) {
            minHeap.enqueue(node.next);
        }
    }

    return dummyHead.next;
}

// Solution Explanation:

// Use a min-heap to store the heads of the linked lists.
// Insert all non-empty list heads into the min-heap.
// Create a dummy head node for the merged list.
// While the min-heap is not empty:
// Dequeue the smallest node from the min-heap.
// Append it to the merged list.
// If the dequeued node has a next node, insert the next node into the min-heap.

// Time Complexity: O(N log k), where N is the total number of nodes across all lists and k is the number of lists.

// Space Complexity: O(k) for the min-heap (in the worst case).