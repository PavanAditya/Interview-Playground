### Autocomplete Suggestions (DSA - Tries/Prefix Trees)

#### Problem Statement:

You are building an autocomplete feature for a search box on an e-commerce website.  Given a list of product names, design a data structure and algorithm that can efficiently suggest products as the user types in the search box.  The suggestions should be based on the prefix entered by the user.

#### Example:

```
const products = ["apple", "apricot", "banana", "kiwi", "grape"];
const autocomplete = new Autocomplete(products);

autocomplete.suggest("ap"); // Returns ["apple", "apricot"]
autocomplete.suggest("ba"); // Returns ["banana"]
autocomplete.suggest("ki"); // Returns ["kiwi"]
autocomplete.suggest("gr"); // Returns ["grape"]
```

#### Discussion Points/Hints:


**Data Structure**: What data structure is efficient for prefix-based search? (Trie/Prefix Tree is the most appropriate).

**Building the Trie**: How would you insert the product names into the Trie?

**Searching the Trie**: How would you traverse the Trie to find all products with a given prefix?

**Returning Suggestions**: How would you collect the list of suggested products from the Trie?