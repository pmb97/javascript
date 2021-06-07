//Write a JavaScript function that accepts a string as a parameter and
//find the longest word within the string.


/*

step 1: define a Javascript functions that accepts a string as a parameter
step 2: using the split method, split the string passed in and createan array of each words
step 3: Define a variable called longestWord and set its intial value to an empty string (without space)
step 4: Set up a for loop that compares the array of words
step 5: Check the length of each word and compare it to the word stored in the variable longestWord
step 6: Store the new longest word in the variable longestWord until the loop is completed
step 7: Return the longestWord

*/

function findLongestWord(str){
  var splitWord = str.split(" ");
  var longestWord ="";

for (var i = 0; i < splitWord.length; i++){
    if (splitWord[i].length > longestWord.length){
      longestWord = splitWord[i]
    };
}
    return longestWord

}

console.log(findLongestWord("It may contain information that is privileged and confidential."))

//console.log("".length)
