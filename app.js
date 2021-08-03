function main()
{
// exercise1();
// exercise2();
 exercise3();



}
main();

function exercise1()
{
  let sentence = prompt("Type a sentence to see it's case changed. Start with all lowercase letters.");
  let splitArray = [];
  if (sentence === sentence.toLowerCase()) {
  let splitSentence = sentence.split(' ');
  splitArray.push(splitSentence);
  for (let i = 0; i < splitArray.length; i++) {
    if (i%2 == 0){
  let capsWords = splitArray[i].toUpperCase();
  
    }
    console.log(capsWords);
  }
  }
}

function exercise2(){
  // get a word from user
  let userWord = prompt("Type a word in all lowercase or all caps.");
  // if its in all lowercase change it to uppercase and alert user
  if (userWord === userWord.toLowerCase()){
    let capsWord = userWord.toUpperCase();
    alert(capsWord);
  }
    // or if its in all uppercase change it to lowercase and alert user
  else if (userWord === userWord.toUpperCase()){
    let lowerWord = userWord.toLowerCase();
    alert(lowerWord);
  }
  // if neither let the user know they didn't follow directions
  else {
    alert("That wasn't all caps or all lowercase.");
  }
}

function exercise3(){
  // define array to put into first function
  let numbers = [1,2,3,4,5,6,7];
  // log it
  console.log(exercise3_first(numbers, 4));
  console.log(exercise3_last(numbers, 8));
}
// first funtion that akes an array and how many numbers to print
function exercise3_first(array, howmany){
  // empty array for us to hold the first few
  let firstFew = [];
  // loop through however many values you want returned
  for (let i = 0; i < howmany; i++) {
    // push those puppies into our empty array
    firstFew.push(array[i]);
  }
  // return the array
  return firstFew;
}
function exercise3_last(array, howmany){
  // empty array for us to hold the last few
  let lastFew = [];
  // loop through however many values you want returned, but start at however many numbers you want - array length
  for (let i = array.length - howmany; i < array.length; i++) {
    // push those puppies into our empty array
    lastFew.push(array[i]);
  }
  // return the array
  return lastFew;
}


function exercise4(){

}
