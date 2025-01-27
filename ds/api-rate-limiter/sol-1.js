class RateLimiter {
    constructor(rate) {
        this.rate = rate; // Requests per second
        this.queue = []; // Store request timestamps
    }

    shouldAllow(timestamp) {
        // Remove outdated timestamps from the queue
        while (this.queue.length > 0 && this.queue[0] <= timestamp - 1) {
            this.queue.shift();
        }

        if (this.queue.length < this.rate) {
            this.queue.push(timestamp);
            return true;
        } else {
            return false;
        }
    }
}


// Solution Explanation:

// Use a queue (this.queue) to store the timestamps of recent requests.
// In shouldAllow(), remove any timestamps from the queue that are older than one second relative to the current timestamp.
// If the queue size is less than the rate limit (R), allow the request and add its timestamp to the queue. Otherwise, reject the request.


// Time Complexity: O(n) in worst case where n is the number of elements present in the queue at that time. Amortized time complexity is O(1) as we remove outdated timestamps.
// Space Complexity: O(R), where R is the rate limit (maximum number of timestamps stored in the queue).