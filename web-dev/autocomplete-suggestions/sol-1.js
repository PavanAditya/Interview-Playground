class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Autocomplete {
    constructor(products) {
      this.root = new TrieNode();
      products.forEach(product => this.insert(product));
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    suggest(prefix) {
      const suggestions = [];
      let node = this.root;
  
      for (const char of prefix) {
        if (!node.children[char]) {
          return suggestions; // No suggestions for this prefix
        }
        node = node.children[char];
      }
  
      function findSuggestions(currentNode, currentWord) {
        if (currentNode.isEndOfWord) {
          suggestions.push(currentWord);
        }
        for (const char in currentNode.children) {
          findSuggestions(currentNode.children[char], currentWord + char);
        }
      }
  
      findSuggestions(node, prefix);
      return suggestions;
    }
  }
  
  
  // Example usage:
  const products = ["apple", "apricot", "banana", "kiwi", "grape"];
  const autocomplete = new Autocomplete(products);
  
  console.log(autocomplete.suggest("ap")); // Returns ["apple", "apricot"]
  console.log(autocomplete.suggest("ba")); // Returns ["banana"]
  console.log(autocomplete.suggest("ki")); // Returns ["kiwi"]
  console.log(autocomplete.suggest("gr")); // Returns ["grape"]


//   Solution Explanation:

//   Uses a Trie (prefix tree) to store product names.
//   insert() adds products to the Trie.
//   suggest() traverses the Trie based on the prefix and collects suggestions.
  
//   Time Complexity: insert() is O(m) where m is the length of the word. suggest() is O(k * l) where k is the number of suggestions and l is the maximum length of a suggestion.
//   Space Complexity: O(n * m) where n is the number of products and m is the maximum length of a product name.