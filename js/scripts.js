//Business Logic
var vowels = ["a", "i", "e", "o", "u"];
var userInput = 0;
var stringCharacters = 0;
var outputString = 0;

//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    userInput = $("input#user-input").val();
    console.log(userInput);

    stringCharacters = userInput.split("");
    console.log(stringCharacters);

    for (var character=0; character<stringCharacters.length; character++) {
      vowels.forEach(function(vowel) {
        if (stringCharacters[character] === vowel) {
          stringCharacters.splice(character, 1, "-");
          console.log(stringCharacters);
        };
      });
    }
    // stringCharacters.join("");
    console.log(stringCharacters);
    outputString = stringCharacters.join("");
    console.log(outputString);
  });
});
