### Infinite Scrolling (DSA - Arrays/Pagination)

#### Problem Statement:

You are implementing infinite scrolling for a web page that displays a list of products. You have an API that returns a limited number of products at a time (e.g., 10 products per request).  Design a function that simulates fetching and displaying products as the user scrolls down the page.  Assume you have the following:

```fetchProducts(page)```: A function that takes a page number as input and returns a Promise that resolves with an array of product objects.

```displayProducts(products)```: A function that takes an array of product objects and displays them on the page.

Implement a function ```handleScroll()``` that is called when the user scrolls. This function should fetch the next set of products when the user reaches the bottom of the currently displayed list and append them to the display. Avoid fetching the same products multiple times.

#### Example (Conceptual):

1. **Initial display:**
```fetchProducts(1).then(displayProducts);```

2. **User scrolls to bottom...**
```handleScroll(); // Fetches and displays products for page 2```

3. **User scrolls further...**
```handleScroll(); // Fetches and displays products for page 3```

#### Discussion Points/Hints:

**State Management**: How will you keep track of which page has been fetched and which products are currently displayed? (Variables to store current page, loaded products, etc.)
**Scroll Event**: How can you detect when the user has scrolled to the bottom of the page? (Event listeners, calculating scroll position).
**Avoiding Redundant Requests**: How will you prevent fetching the same page of products multiple times? (Use flags or cached data).
**Loading Indicator**: How would you implement a loading indicator while fetching products? (Show/hide a spinner).