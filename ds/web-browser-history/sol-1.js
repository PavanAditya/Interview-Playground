class BrowserHistory {
    constructor(homepage) {
      this.history = [homepage];
      this.current = 0;
    }
  
    visit(url) {
      this.history = this.history.slice(0, this.current + 1); // Clear forward history
      this.history.push(url);
      this.current = this.history.length - 1;
    }
  
    back(steps = 1) {
      this.current = Math.max(this.current - steps, 0);
      return this.history[this.current];
    }
  
    forward(steps = 1) {
      this.current = Math.min(this.current + steps, this.history.length - 1);
      return this.history[this.current];
    }
}


// Solution Explanation:

// Use two pointers: current to track the current page and history to store the visited URLs as an array.
// visit() adds the new URL to the history and resets the forward history.
// back() and forward() move the current pointer within the bounds of the history array.


// Time Complexity: O(1) for visit(), O(min(steps, history.length)) for back() and forward().
// Space Complexity: O(n) where n is the number of visited URLs.