let currentPage = 1;
let isLoading = false;
let allProducts = [];

async function fetchProducts(page) {
    //Simulate API call
    return new Promise(resolve => {
        setTimeout(() => {
            const newProducts = Array.from({length:10}, (_,i) => ({name:`Product ${page*10 + i}`}));
            resolve(newProducts)
        }, 500);
    })
}

function displayProducts(products) {
    const productList = document.getElementById("product-list"); // Replace with your actual element ID
    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        productList.appendChild(li);
    });
}

async function handleScroll() {
    if (isLoading) return; // Prevent multiple fetches

    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollPosition >= pageHeight - 100) { // Adjust threshold as needed
        isLoading = true;
        try {
            const products = await fetchProducts(currentPage + 1);
            displayProducts(products);
            currentPage++;
            allProducts = allProducts.concat(products)
        } finally {
            isLoading = false;
        }
    }
}

// Initial load
fetchProducts(currentPage).then(displayProducts);

window.addEventListener("scroll", handleScroll);


// Solution Explanation:
// currentPage: Tracks the current page number.
// isLoading: Prevents concurrent fetches.
// handleScroll(): Checks scroll position and fetches the next page if needed.
// Uses async/await for cleaner asynchronous code.

// Time Complexity: O(1) for handleScroll() (mostly event handling), O(m) for initial load where m is the number of products fetched.
// Space Complexity: O(n), where n is the total number of products loaded.