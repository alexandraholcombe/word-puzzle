//Business Logic
var vowels = ["a", "i", "e", "o", "u"];
var userInput = 0;
var stringCharacters = 0;

//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    userInput = $("input#user-input").val();
    console.log(userInput);

    stringCharacters = userInput.split("");

    console.log(stringCharacters);
  });
});
