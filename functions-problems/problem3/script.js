//Write a JavaScript function that accepts two arguments, a string and a letter
//and the function will count the number of occurrences of the specified letter within the string

/*

step 1: Define a Javascript function that accepts a string as a parameter and a letter as a parameter
step 2: Define a variable called numberOfOccurences and set its initial value to 0
step 4: Start looping through the string
step 5: Check if the specified letter shows up in the string
step 6: Increase the count variable by 1 each time the letter occurs
step 7: Return count of occurrences of the specified letter

*/

function findLetterCount(str, letter){
  var numberOfOccurences = 0;

for (let i = 0; i < str.length; i++){
    if ((str.charAt(i).toLowerCase())== letter){
      numberOfOccurences++
    }
}
    return numberOfOccurences;

}

console.log(findLetterCount("It may contain information that is privileged and confidential.", "a"))
