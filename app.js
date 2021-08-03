// creating pets in object literal for ex 5

const pet1 = {
  petType: "dog",
  age: 10,
  color: "brown",
};
const pet2 = {
  petType: "cat",
  age: 3,
  color: "black",
};
const pet3 = {
  petType: "bird",
  age: 1,
  color: "yellow",
};

function main() {
  // exercise1();
  // exercise2();
  // exercise3();
  // let months =['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun'];
  // exercise4(months, 'Feb');
  // console.log(months);
  // exercise5();
}
main();

function exercise1() {
  // get a sentence from user
  let sentence = prompt(
    "Type a sentence to see it's case changed. Start with all lowercase letters."
  );
  // make sure its all lowercase
  if (sentence === sentence.toLowerCase()) {
    // split the sentence at spaces and make a new array of every word
    let splitSentence = sentence.split(" ");
    // loop through new sentence array values
    for (let i = 0; i < splitSentence.length; i++) {
      // only use all the odd indexed words
      if (i % 2 != 0) {
        // change the odd words to uppercase
        splitSentence[i] = splitSentence[i].toUpperCase();
      }
    }
    // join the array with a space between each word
    let newSentence = splitSentence.join(" ");
    // log it
    console.log(newSentence);
  }
}

function exercise2() {
  // get a word from user
  let userWord = prompt("Type a word in all lowercase or all caps.");
  // if its in all lowercase change it to uppercase and alert user
  if (userWord === userWord.toLowerCase()) {
    let capsWord = userWord.toUpperCase();
    alert(capsWord);
  }
  // or if its in all uppercase change it to lowercase and alert user
  else if (userWord === userWord.toUpperCase()) {
    let lowerWord = userWord.toLowerCase();
    alert(lowerWord);
  }
  // if neither let the user know they didn't follow directions
  else {
    alert("That wasn't all caps or all lowercase.");
  }
}

function exercise3() {
  // define array to put into first function
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  // log it
  console.log(exercise3_first(numbers, 4));
  console.log(exercise3_last(numbers, 8));
}
// first funtion that akes an array and how many numbers to print
function exercise3_first(array, howmany) {
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
function exercise3_last(array, howmany) {
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

function exercise4(array, remove) {
  // find where in the array the item to be removed is
  let deleteIndex = array.indexOf(remove);
  // if the value is in the array
  if (deleteIndex > -1) {
    // delete one item starting at the index of our value to be deleted
    array.splice(deleteIndex, 1);
  }
}

function exercise5() {
  // make mepty array to hold pets
  let pet_list = [];
  // push in the pet objects
  pet_list.push(pet1);
  pet_list.push(pet2);
  pet_list.push(pet3);
  // log the array
  console.log(pet_list);
}
// testing git settings
