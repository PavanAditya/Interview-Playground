### DSA - Stacks/Queues - Rate Limiter

#### Problem Statement:

You are designing a rate limiter for an Amazon API. The rate limiter should allow a maximum of R requests per second. Implement a rate limiter that supports the following operation:

#### Task:

Implement a function ````shouldAllow(timestamp)``` which takes an input timestamp(in seconds), returns ```true``` if a request should be allowed at that time, and ```false``` otherwise.

Sample Input/Output:

Let's say ```R = 2``` (2 requests per second).

#### Example 1:
```
shouldAllow(1) // Returns true
shouldAllow(1) // Returns true
shouldAllow(1) // Returns false (Rate limit exceeded for second 1)
shouldAllow(2) // Returns true
shouldAllow(2) // Returns true
shouldAllow(3) // Returns true
```
#### Example 2 (Burst):
```
shouldAllow(1) // Returns true
shouldAllow(1) // Returns true
shouldAllow(2) // Returns true
shouldAllow(2) // Returns true
shouldAllow(2) // Returns false
```
#### Example 3 (Edge Case - Initial Requests):
```
shouldAllow(0) // Returns true
shouldAllow(0) // Returns true
shouldAllow(0) // Returns false
```