class RateLimiter {
    constructor(rate) {
      this.rate = rate; // Requests per second
      this.requestCounts = new Map(); // IP -> {timestamp: count}
    }
  
    shouldAllow(ipAddress) {
      const now = Date.now();
      let ipData = this.requestCounts.get(ipAddress);
  
      if (!ipData) {
        ipData = { timestamp: now, count: 0 };
      }
  
      // Clear outdated timestamps
      if (now - ipData.timestamp > 1000) { // 1 second in milliseconds
        ipData.count = 0;
        ipData.timestamp = now;
      }
  
      if (ipData.count < this.rate) {
        ipData.count++;
        this.requestCounts.set(ipAddress, ipData);
        return true;
      } else {
        return false;
      }
    }
  }
  
  // Example usage:
  const limiter = new RateLimiter(2);
  console.log(limiter.shouldAllow("192.168.1.1")); // true
  console.log(limiter.shouldAllow("192.168.1.1")); // true
  console.log(limiter.shouldAllow("192.168.1.1")); // false
  setTimeout(() => {
      console.log(limiter.shouldAllow("192.168.1.1")); // true (after 1 second)
  }, 1000);


// Solution Explanation:
// Uses a Map to store request counts and timestamps per IP.
// Clears outdated timestamps (older than 1 second).
// Checks the request count against the rate limit.

// Time Complexity: O(1) per call to shouldAllow.
// Space Complexity: O(n), where n is the number of unique IP addresses.