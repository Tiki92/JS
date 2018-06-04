
// JavaScript: Reverse a number
function reverse_a_number() {
  var n = +document.getElementById("number_reverse_a_number").value;
  n = n + "";

  document.getElementById("result_reverse_a_number").innerHTML = "Ther result is : " + n.split("").reverse().join("");
}

// animate string
function animate_string(id)
{
  var element = document.getElementById(id);
  var textNode = element.childNodes[0]; // assuming no other children
  var text = textNode.data;

setInterval(function ()
{
text = text[text.length - 1] + text.substring(0, text.length - 1);
textNode.data = text;
}, 100);
}

//JavaScript: Check whether a passed string is palindrome or not
function check_Palindrome() {
// Get the value of the strings
  var str_entry = document.getElementById("word_check_Palindrome").value;
// Change the string into lower case and remove all non-alphanumeric characters
  var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
  var count = 0;
  // Check whether the string is empty or not
  if (cstr === "") {
    document.getElementById("result_check_Palindrome").innerHTML = "Nothing Found!";
  }
// Check if the length of the string is even or word_middle_threeif
if (((cstr.length) % 2 === 0)) {
  var ccount = (cstr.length) / 2;
} else {
// If the lengthof string is 1 thrn it becomes a palindrome
if (cstr.length === 1) {
  document.getElementById("result_check_Palindrome").innerHTML = "Entry is a palidrome.";
} else {
// If the length of the string is odd ignore the middle character
ccount = (cstr.length - 1) / 2;
}
}
// Loop through to check the first character to the last character and then move next
for (var x = 0; x < ccount; x++) {
  // Compare characters and drop them is they don't match
  if (cstr[x] != cstr.slice(-1 - x)[0]) {
    document.getElementById("result_check_Palindrome").innerHTML = "Entry is not a palidrome.";
  } else {
    document.getElementById("result_check_Palindrome").innerHTML = "The entry is a palidrome.";
  }

}
}


// JavaScript: Find a perfect number
function is_perfect() {
  var number = +document.getElementById("number_is_perfect").value;

  var temp = 0;
  for(var i = 1; i <= number/2; i++) {

    if (number % i === 0) {
      temp += i;
    }
  }
  if (temp === number && temp !== 0) {
    document.getElementById("result_is_perfect").innerHTML = "It is a perfect number.";
  } else {
    document.getElementById("result_is_perfect").innerHTML = "It is a not a perfect number.";
  }
}

// JavaScript: Extract unique characters from a string
function unique_char() {
  var str = document.getElementById("letters_unique_char").value;
  var uniql = "";
  for (var x = 0; x < str.length; x++) {
    if (uniql.indexOf(str.charAt(x)) == - 1) {
      //console.log(uniql);
      uniql += str[x];
    }
  }
  document.getElementById("result_unique_char").innerHTML = "The result is : " + uniql;
}

// JavaScript: Generates a string id (specified length) of random characters
function makeid() {
  var l = +document.getElementById("number_makeid").value;
  var text = "";
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for(var i = 0; i < l; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  document.getElementById("result_makedir").innerHTML = "The result is : " + text;
}

// JavaScript: Letter count within a string
function char_count() {
  var str = document.getElementById("word_char_count").value;
  var letter = document.getElementById("letter_char_count").value;
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  document.getElementById("result_char_count").innerHTML = "The result is : " + letter_Count;
}
