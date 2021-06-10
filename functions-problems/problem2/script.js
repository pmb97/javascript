//Write a JavaScript function that accepts a string as a parameter
//and counts the number of vowels within the string.

/*

step 1: define a Javascript functions that accepts a string as a parameter
step 2: using the split method, split the string passed in and create an array of individual letters,
store it in a variable called arrayOfLetters
step 3: Define a variable called vowelCount and set its intial value to be equal to 0
step 4: Define a variable that defines what a vowel is, an array of vowels
step 5: Start looping through our array of letters
step 6: Check if the current letter in the loop is a vowel
step 7: Increase the count variable by one for every letter that is a vowel
step 7: Return the count of vowels

*/



function findVowelsCount(str){

  var arrayOfLetters = str.split("");
  var arrayOfVowels = ["a", "e", "i", "o", "u"];
  var vowelCount = 0;

for (let numberOfVowels = 0; numberOfVowels < arrayOfLetters.length; numberOfVowels++){
  if (arrayOfVowels.includes(arrayOfLetters[numberOfVowels])){
    vowelCount++
  };
}

  return vowelCount;
}
console.log(findVowelsCount("it may contain information that is privileged and confidential."))
