function get(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === "error") {
        reject("Something went wrong!");
      } else {
        resolve(`Fetched: ${value}`);
      }
    }, 1000);
  });
}

// Example with success
get("data")
  .then(result => {
    console.log(result); // Output after 1s: Fetched: data
    return get("more data");
  })
  .then(result => {
    console.log(result); // Output after another 1s: Fetched: more data
    return get("final data");
  })
  .then(result => {
    console.log(result); // Output: Fetched: final data
  })
  .catch(error => {
    console.error("Error:", error); // Only runs if any get() call fails
  })
  .finally(() => {
    console.log("All done (success or fail)."); // Always runs
  });

/*
Expected Output:
(after 1s)   Fetched: data
(after 2s)   Fetched: more data
(after 3s)   Fetched: final data
            All done (success or fail)
*/


// Example with failure
get("data")
  .then(result => {
    console.log(result); // Output: Fetched: data
    return get("error"); // This will reject
  })
  .then(result => {
    console.log(result); // Will be skipped
  })
  .catch(error => {
    console.error("Error:", error); // Output after 2s: Error: Something went wrong!
  })
  .finally(() => {
    console.log("All done (success or fail)."); // Always runs
  });

/*
Expected Output:
(after 1s)   Fetched: data
(after 2s)   Error: Something went wrong!
            All done (success or fail)
*/


// Example with catch in between
get("data")
  .then(result => {
    console.log(result); // Output: Fetched: data
    return get("error"); // This will reject
  })
  .catch(error => {
    console.error("Caught an error:", error); // Output: Caught an error: Something went wrong!
    // Decide to recover and continue the chain
    return "Recovered from error";
  })
  .then(result => {
    console.log("Continuing with:", result); // Output: Continuing with: Recovered from error
    return get("abc"); // This will resolve
  })
  .then(result => {
    console.log(result); // Output: Fetched: abc
    return get("error"); // This will reject
  })
  .catch(error => {
    console.error("Caught an error:", error); // Output: Caught an error: Something went wrong!
    // Recovers and continues the chain, but since no return value the next would have 'undefined' as input
  })
  .then(result => {
    console.log("Continuing with:", result); // Output: Continuing with: undefined
  })
  .finally(() => {
    console.log("All done (success or fail)."); // Always runs. Output: All done (success or fail).
  });

/*
Expected Output:
(after 1s)   Fetched: data
(after 2s)   Caught an error: Something went wrong!
             Continuing with: Recovered from error
(after 3s)   Fetched: abc
(after 4s)   Caught an error: Something went wrong!
             Continuing with: undefined
            All done (success or fail)
*/
