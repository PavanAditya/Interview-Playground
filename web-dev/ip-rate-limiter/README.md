### Rate Limiter (System Design - Basic)

#### Problem Statement:

Design a simple rate limiter for a web API.  The rate limiter should allow a maximum of R requests per second from a given IP address.  Implement a function shouldAllow(ipAddress) that returns true if a request from the given IP address should be allowed, and false otherwise.  Assume the current time is available (you can use Date.now() in JavaScript or similar functions in other languages).

#### Example:

```
const rateLimiter = new RateLimiter(2); // 2 requests per second

rateLimiter.shouldAllow("192.168.1.1"); // true
rateLimiter.shouldAllow("192.168.1.1"); // true
rateLimiter.shouldAllow("192.168.1.1"); // false (rate limit exceeded)
rateLimiter.shouldAllow("192.168.1.2"); // true (different IP)

// After a second...
rateLimiter.shouldAllow("192.168.1.1"); // true (rate limit resets)
```

#### Discussion Points (Not necessarily full coding, but focus on approach):

**Data Structure**: What data structure would you use to store the request timestamps for each IP address? (A dictionary/hash map keyed by IP address is a good choice).

**Time Window**: How would you keep track of requests within the last second? (Store timestamps, and discard old ones).

**Concurrency**: (If the candidate is strong) How would you handle concurrent requests to the rate limiter? (Consider thread safety if discussing multi-threaded environments).

**Scaling (Optional)**: (If the candidate is very strong) Briefly discuss how you might scale this to handle many IP addresses and high request volumes. (Distributed cache, etc.)
