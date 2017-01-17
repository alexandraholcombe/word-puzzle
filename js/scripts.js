//Business Logic
var vowels = ["a", "i", "e", "o", "u"];
var userInput = 0;
var stringCharacters = 0;
var outputString = 0;

var replaceVowels = function(){
  userInput = $("input#user-input").val();

  stringCharacters = userInput.split("");

  for (var character=0; character<stringCharacters.length; character++) {
    vowels.forEach(function(vowel) {
      if (stringCharacters[character] === vowel) {
        stringCharacters.splice(character, 1, "-");
        console.log(stringCharacters);
      };
    });
  }
  outputString = stringCharacters.join("");
  console.log(outputString);
};

//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    replaceVowels();

  });
});
