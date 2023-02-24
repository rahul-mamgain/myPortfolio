const paragraph = document.getElementById("demo");  // get the paragraph element
const words = paragraph.textContent.trim().split(/\s+/);    // split the text into an array of words
const wordCount = words.length;                             // count the number of words in the array
console.log(`The paragraph has ${wordCount} words.`); 