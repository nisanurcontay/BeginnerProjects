const vowels = "aeiou";
function countVowel() {
  if (document.getElementById("text")) {
    var text = document.getElementById("text").value;
    text = text.toLowerCase().split("");
    text = text.filter(function (letter) {
      return vowels.includes(letter);
    });
    alert("This text includes " + text.length + " vowel");
  }
}
