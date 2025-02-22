// Challenge 2: String Processing
// Create a function that counts the occurrence of each word 
// in a sentence and returns an object with the word counts. 
// The count should be case-insensitive.
// Example: "The cat and the Dog and the mouse" → { the: 3, cat: 1, and: 2, dog: 1, mouse: 1 }

function countWords(sentence) {
    let words = sentence.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        countObj[word] = (countObj[word] || 0) + 1;
    }

    return countObj;
}



console.log(countWords("The cat and the Dog and the mouse")); 