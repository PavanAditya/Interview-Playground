### Web Browser History

#### Task
You are building a web browser. Implement a browser history that supports the following operations:

1. **Visit URL:** Visit the given URL and add it to the history list.
2. **Move Back:** Move back one URL, if any in the history list. Stay on current if none.
3. **Move Forward:** Move forward one URL, if any in the history list. Stay on current if none.

#### Class Definition

```visit(url)```: Updates "current url" with the given url and load it into the browser. Maintains it in history list.

```back()```: Moves one step back in the browsing history and returns the URL, returns current url if none.

```forward()```: Moves one step forward in the browsing history and returns the URL.

#### Example Usage

**Example 1**
```
visit("google.com")
visit("amazon.com")
visit("youtube.com")
back() // Returns "amazon.com"
back() // Returns "google.com"
forward() // Returns "amazon.com"
visit("linkedin.com")
forward() // Returns "linkedin.com" (No forward history after visiting a new page)
```

**Example 2**
```
visit("leetcode.com")
back() // Returns "leetcode.com" (No previous page)
forward() // Returns "leetcode.com" (No forward history)
```

**Example 3 (Edge Case - Empty History)**
```
back() // Returns "empty"
forward() // Returns "empty"
```
