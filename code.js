
function addToZero(numbers) {
    for (let i = 0; i < numbers.length; i += 1) {
        for (let j = 0; j < numbers.length; i += 1) {
            if (numbers[j] + numbers[i] === 0 & j !== i) {
                return true; 
            }
        }
        }
    return false; 
}

//use a variable to track letters
//use.includes to see if the letter exists already
//or use an object since all values must be unique

function uniqueChars(word) {
    let existingLetters = {};

    for (let character of word) {
        if (uniqueChars[character]) {
            return false;
        } else {
            uniqueChars[char] = true;
        }
        return true;
    }   
}

// function pangramSentence(sentence) {
//     const lowerCaseSentence = sentence.toLowerCase();

//     const letters = new Set(); //set has to be unique 

// }
function isPangram(sentence){
    //the sentences will likely start with a capital letter
    let chars = sentence.toLowerCase();
    //make an array with the alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(chars.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));


function findLongerWord(words) {
    let wordLength = 0;

    for (const word of words) {
    
        if (word.length > wordLength) {
            wordLength = word.length;
        }
    }
    return wordLength;
}

console.log(findLongerWord(["hi", "hello"]));