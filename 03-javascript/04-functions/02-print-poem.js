async function printRandomPoem() {
  try {
    // 1. Fetch a random poem from the API
    const response = await fetch("https://poetrydb.org/random");

    // 2. Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 3. Parse the JSON data
    const data = await response.json();

    // 4. Extract the first poem (the API returns an array)
    const poem = data[0];

    // 5. Print the formatted output
    console.log(`Title: ${poem.title}`);
    console.log(`Author: ${poem.author}`);
    console.log("-----------------------------------");

    // The 'lines' property is an array of strings representing each line
    poem.lines.forEach((line) => {
      console.log(line);
    });
    console.log("-----------------------------------");
  } catch (error) {
    console.error("Failed to fetch the poem:", error);
  }
}

// Execute the function
printRandomPoem();
