// Check whether an 'input' is a string or not
is_string = function(input) {
  if (Object.prototype.toString.call(input) === '[object String]')
    return true;
  else
    return false;
    };

console.log("Check whether an 'input' is a string or not :");
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

// Check whether a string is blank or not
is_Blank =  function(input) {
        if (input.length === 0)
        return true;
        else
        return false;
      }
console.log("_________________________________________");
console.log("Check whether a string is blank or not :");
console.log(is_Blank(''));
console.log(is_Blank('abc'));

// Split a string and convert it into an array of words
string_to_array = function (str) {
     return str.trim().split(" ");
};
console.log("_________________________________________");
console.log("Split a string and convert it into an array of words :");
console.log(string_to_array("Robin Singh"));

// Remove a specific number of characters from a string
truncate_string = function (str1, length) {

    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log("_________________________________________");
console.log("Remove a specific number of characters from a string :");
console.log(truncate_string("Robin Singh",4));

// Remove a specific number of characters from a string
truncate_string = function (str1, length) {

    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log("_________________________________________");
console.log("Remove a specific number of characters from a string :");
console.log(truncate_string("Robin Singh",4));

// Convert a string in abbreviated form
function abbrev_name() {
  var str1 = document.getElementById("sentence_abbrev_name").value;

  var split_names = str1.trim().split(" ");
  if (split_names.length > 1) {
    document.getElementById("result_abbrev_name").innerHTML = "The result is : " + (split_names[0] + " " + split_names[1].charAt(0) + ".");
  } else {
  document.getElementById("result_abbrev_name").innerHTML = "The result is : " + split_names[0];
  }
}

// Hide email addresses to protect from unauthorized user
function protect_email() {
  var user_email = document.getElementById("email_protect_email").value;

  var avg, splitted, part1, part2;
  splitted = user_email.split("@");
  part1 = splitted[0];
  avg = part1.length /  2;
  part1 = part1.substring(0, (part1.length - avg));
  part2 = splitted[1];
  document.getElementById("result_protect_email").innerHTML = "The result is : " + part1 + "...@" + part2;
}

// Parameterize a string
function string_parameterize() {
  var str1 = document.getElementById("sentence_string_parameterize").value;
  document.getElementById("result_string_parameterize").innerHTML = "The result is : " +
  str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
}

// Make capitalize the first letter of a string
function capitalize() {
  var str1 = document.getElementById("sentence_capitalize").value;
  document.getElementById("result_capitalize").innerHTML = "The result is : " + str1.charAt(0).toUpperCase() + str1.slice(1);
}

// Make capitalize the first letter of each word in a string
function capitalize_Words() {
  var str = document.getElementById("sentence_capitalize_Words").value;
  document.getElementById("result_capitalize_Words").innerHTML = "The result is : " +
  str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// Input a string and converts upper case letters to lower and vice versa
swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
console.log("_________________________________________");
console.log("Input a string and converts upper case letters to lower and vice versa :");
console.log(swapcase('AaBbc'));

// Convert a string into camel case
function camelize() {
  var str = document.getElementById("word_camelize").value;
  document.getElementById("result_camelize").innerHTML = "The result is : " +
  str.replace(/\W+(.)/g, function(match, chr) {return chr.toUpperCase();});
}

// Make a string uncamelize
function uncamelize(str, separator) {
  // Assume default separator is a single space.
  if(typeof(separator) == "undefined") {
    separator = " ";
  }
  // Replace all capital letters by separator followed by lowercase one
  var str = str.replace(/[A-Z]/g, function (letter)
  {
    return separator + letter.toLowerCase();
  });
  // Remove first separator
  return str.replace("/^" + separator + "/", '');
}
console.log("_________________________________________");
console.log("Make a string uncamelize :");
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));

// Concatenate a specific string for a specific number of times
repeat = function repeat(str, count) {
    if(typeof(count) == "undefined") {
    count =1;
  }
  return count < 1 ? '' : new Array(count + 1).join(str);
    }
console.log("_________________________________________");
console.log("Concatenate a specific string for a specific number of times :");
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));

// Insert a string within a specific position in another string
insert = function insert(main_string, ins_string, pos) {
   if(typeof(pos) == "undefined") {
    pos = 0;
  }
   if(typeof(ins_string) == "undefined") {
    ins_string = '';
  }
   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
    }
console.log("_________________________________________");
console.log("Insert a string within a specific position in another string :");
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));

// Formats a number to a human-readable string
humanize_format = function humanize(num) {
   if(typeof(num) == "undefined") return;
  if(num % 100 >= 11 && num % 100 <= 13)
        return num + "th";

        switch(num % 10) {
            case 1: return num + "st";
            case 2: return num + "nd";
            case 3: return num + "rd";
        }
        return num + "th";
    }
console.log("_________________________________________");
console.log("Formats a number to a human-readable string :");
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));

// Truncate a string if it is longer than the specified number of characters
text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
console.log("_________________________________________");
console.log("Truncate a string if it is longer than the specified number of characters :");
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))

// Chop a string into chunks of a specific length
string_chop =  function(str, size){
      if (str == null) return [];
      str = String(str);
      size = ~~size;
return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log("_________________________________________");
console.log("Chop a string into chunks of a specific length :");
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));

// Count the occurrence of a substring in a string
function count(main_str, sub_str)
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0)
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
console.log("_________________________________________");
console.log("Count the occurrence of a substring in a string :");
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));

// JavaScript: Escape a HTML string
function escape_HTML(html_str) {
    'use strict';

    return html_str.replace(/[&<>"]/g, function (tag) {
		var chars_to_replace = {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"'
        };

		return chars_to_replace[tag] || tag;
	});
}
console.log("_________________________________________");
console.log("JavaScript: Escape a HTML string :");
console.log(escape_HTML(''));

// Pad (left, right) a string to get to a determined length
function formatted_string(pad, user_str, pad_pos)
{
  if (typeof user_str === 'undefined')
    return pad;
  if (pad_pos == 'l')
     {
     return (pad + user_str).slice(-pad.length);
     }
  else
    {
    return (user_str + pad).substring(0, pad.length);
    }
}
console.log("_________________________________________");
console.log("Pad (left, right) a string to get to a determined length :");
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));

// Repeat a string a specified times
function repeat_string(string, count)
  {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
      {
        return('Error in string or count.');
      }
        count = count | 0; // Floor count.
    return new Array(count + 1).join(string);
  }
console.log("_________________________________________");
console.log("Repeat a string a specified times :");
console.log(repeat_string('a', 4.6));
console.log(repeat_string('a'));
console.log(repeat_string('a', -2));
console.log(repeat_string('a', Infinity));

// Get a part of string after a specified character
function subStrAfterChars(str, char, pos)
{
  if(pos=='b')
   return str.substring(str.indexOf(char) + 1);
  else if(pos=='a')
   return str.substring(0, str.indexOf(char));
  else
  return str;
}
console.log("_________________________________________");
console.log("Get a part of string after a specified character :");
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));

// Strip leading and trailing spaces from a string
function strip() {
  var str = document.getElementById("word_strip").value;
  document.getElementById("result_strip").innerHTML = "The result is : " + str.replace(/^\s+|\s+$/g, '');
}

// Truncate a string to a certain number of words
function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}
console.log("_________________________________________");
console.log("Truncate a string to a certain number of words :");
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

// Alphabetize a given string
function alphabetize_string() {
  var str = document.getElementById("word_alphabetize_string").value;
  document.getElementById("result_alpabetize_string").innerHTML = "The result is : " + str.split('').sort().join().trim();
}

// Remove the first occurrence of a given 'search string' from a string
function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}
console.log("_________________________________________");
console.log("Remove the first occurrence of a given 'search string' from a string :");
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

// Convert ASCII to Hexadecimal format
function ascii_to_hexa(str)
  {
    var str = document.getElementById("number_ascii_to_hex").value;
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++)
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	document.getElementById("result_ascii_to_hexa").innerHTML = "The resukt is : " + arr1.join('');
   }

// Convert Hexadecimal to ASCII format
function hex_to_ascii()
 {
  var str1 = document.getElementById("number_hex_to_ascii").value;
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	document.getElementById("result_hex_to_ascii").innerHTML = "The result is : " + str;
 }

// Find a word within a string
function search_word(text, word){

    var x = 0, y=0;

    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
}
console.log("_________________________________________");
console.log("Find a word within a string :");
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));

// Check if a string ends with specified suffix
function string_endsWith(str, suffix)
{

 if (((str===null) || (str==='')) || ((suffix===null) || (suffix==='')))
   {
    return false;
   }
  else
  {
   str = str.toString();
   suffix = suffix.toString();
   }
 return str.indexOf(suffix, str.length -     suffix.length) !== -1;
}
console.log("_________________________________________");
console.log("Check if a string ends with specified suffix :");
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith('JS PHP PYTHON',''));

// Escapes special characters for use in HTML
function escape_html() {
  var str = document.getElementById("something_escape_html").value;
 if ((str===null) || (str===''))
       document.getElementById("result_escape_html").innerHTML = "The result is : " + false;
 else
   str = str.toString();

  var map = {
  '&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#039;'
  };
  var res = str.replace(/[&<>"']/g, function(m) { return map[m]; });
  document.getElementById("result_escape_html").innerHTML = "The result is : " + res;
}

// Remove non-printable ASCII chars
function remove_non_ascii() {
  var str = document.getElementById("symbols_remove_non_ascii").value;
  if ((str===null) || (str===''))
       document.getElementById("result_remove_non_ascii").innerHTML = "The result is : " + false;
 else
   str = str.toString();

  document.getElementById("result_remove_non_ascii").innerHTML = "The result is : " + str.replace(/[^\x20-\x7E]/g, '');
}

// Remove non-word characters
function remove_non_word () {
  var str = document.getElementById("word_remove_non_word").value;
    if ((str===null) || (str===''))
       document.getElementById("result_remove_non_word").innerHTML = "The result is : " + false;
 else
   str = str.toString();

var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

  document.getElementById("result_remove_non_word").innerHTML = "The result is : " + str.replace(PATTERN, '');
}

// Convert a string to title case
function sentenceCase () {
  var str = document.getElementById("word_sentenceCase").value;
  if ((str===null) || (str===''))
       document.getElementById("word_sentenceCase").innerHTML = "The result is : " + false;
  else
   str = str.toString();

 document.getElementById("result_sentenceCase").innerHTML = "The result is : " + str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// Remove HTML/XML tags from string
function strip_html_tags()
{
  var str = document.getElementById("word_strip_html_tags").value;
   if ((str===null) || (str===''))
       document.getElementById("result_strip_html_tags").innerHTML = "The result is : " + false;
  else
   str = str.toString();
  document.getElementById("result_strip_html_tags").innerHTML = "The result is : " + str.replace(/<[^>]*>/g, '');
}

// Create a Zerofilled value with optional +, - sign
function zeroFill(number, width, osign) {
    var num = '' + Math.abs(number),
        zerosw = width - num.length,
        sign = number >= 0;
    return (sign ? (osign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}
console.log("_________________________________________");
console.log("Create a Zerofilled value with optional +, - sign :");
console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));

// Test case insensitive (except special Unicode characters) string comparison
function compare_strings(str1, str2)
{
var areEqual = str1.toUpperCase() === str2.toUpperCase();
  return areEqual;
}
console.log("_________________________________________");
console.log("Test case insensitive (except special Unicode characters) string comparison :");
console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));

// Create a case-insensitive search
function case_insensitive_search(str, search_str)
  {
    var result= str.search(new RegExp(search_str, "i"));

    if (result>0)
    return 'Matched';
    else
    return 'Not Matched';
   }
console.log("_________________________________________");
console.log("Create a case-insensitive search :");
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));

// Uncapitalize the first character of a string
function Uncapitalize(){
  var str1 = document.getElementById("word_Uncapitalize").value;
  document.getElementById("result_Uncapitalize").innerHTML = "The result is : " + str1.charAt(0).toLowerCase() + str1.slice(1);
}

// Uncapitalize the first letter of each word of a string
function unCapitalize_Words()
{
  var str = document.getElementById("word_unCapitalize_Words").value;
  document.getElementById("result_unCapitalize_Words").innerHTML = "The result is : " + str.replace(/\w\S*/g,
    function(txt)
       {
          return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();});
}

// Capitalize each word in the string
function capitalizeWords()
{
  var str = document.getElementById("sentence_capitalizeWords").value;
 document.getElementById("result_capitalizeWords").innerHTML = "The result is : " +
 str.replace(/\w\S*/g, function(txt){return txt.substr(0).toUpperCase();});
}

// Uncapitalize each word in the string
function unCapitalizeWords()
{
var str = document.getElementById("sentence_unCapitalizeWords").value;
 document.getElementById("result_unCapitalizeWords").innerHTML = "The result is : " +
 str.replace(/\w\S*/g, function(txt){return txt.substr(0).toLowerCase();});
}

// Test whether the character at the provided character index is upper case
function isUpperCaseAt(str, index) {
 return str.charAt(index).toUpperCase() === str.charAt(index);
    }
console.log("_________________________________________");
console.log("Test whether the character at the provided character index is upper case :");
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

// Test whether the character at the provided character index is lower case
function isLowerCaseAt(str, index) {
 return str.charAt(index).toLowerCase() === str.charAt(index);
    }
console.log("_________________________________________");
console.log("Test whether the character at the provided character index is lower case :");
console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));

// Get humanized number with the correct suffix
function humanize_num() {
  var number = +document.getElementById("number_humanize_num").value;
        if(number % 100 >= 11 && number % 100 <= 13)
            document.getElementById("result_humanize_num").innerHTML = "The result is : " + number + "th";
            else
        switch(number % 10) {
            case 1: document.getElementById("result_humanize_num").innerHTML = "The result is : " + number + "st";
            case 2: document.getElementById("result_humanize_num").innerHTML = "The result is : " + number + "nd";
            case 3: document.getElementById("result_humanize_num").innerHTML = "The result is : " + number + "rd";
        }

        document.getElementById("result_humanize_num").innerHTML = "The result is : " + number + "th";
    }

// Test whether a string starts with a specified string
function startsWith(input, string) {
  return input.indexOf(string) === 0;
}
console.log("_________________________________________");
console.log("Test whether a string starts with a specified string :");
console.log(startsWith('js string exercises', 'js'));

// Test whether a string ends with a specified string
function endsWith(input, string) {
        var index = input.length - string.length;
        return index >= 0 && input.indexOf(string, index) > -1;
    }
console.log("_________________________________________");
console.log("Test whether a string ends with a specified string :");
console.log(endsWith('JS string exercises', 'exercises'));

// Get the successor of a string
function successor() {
  var str = document.getElementById("text_succesor").value;
        var alphabet = 'abcdefghijklmnopqrstuvwxyz',
            length = alphabet.length,
            result = str,
            i = str.length;

        while(i >= 0) {
            var last = str.charAt(--i),
                next = '',
                carry = false;

            if (isNaN(last)) {
                index = alphabet.indexOf(last.toLowerCase());

                if (index === -1) {
                    next = last;
                    carry = true;
                }
                else {
                    var isUpperCase = last === last.toUpperCase();
                    next = alphabet.charAt((index + 1) % length);
                    if (isUpperCase) {
                        next = next.toUpperCase();
                    }

                    carry = index + 1 >= length;
                    if (carry && i === 0) {
                        var added = isUpperCase ? 'A' : 'a';
                        result = added + next + result.slice(1);
                        break;
                    }
                }
            }
            else {
                next = +last + 1;
                if(next > 9) {
                    next = 0;
                    carry = true;
                }

                if (carry && i === 0) {
                    result = '1' + next + result.slice(1);
                    break;
                }
            }

            result = result.slice(0, i) + next + result.slice(i + 1);
            if (!carry) {
                break;
            }
        }
        document.getElementById("result_succesor").innerHTML = "The result is : " + result;
    }

// Get unique guid of the specified length, or 32 by default
function guid() {
  var len = +document.getElementById("number_guid").value;
        var buf = [],
            chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+',
            charlen = chars.length,
            length = len || 32;

        for (var i = 0; i < length; i++) {
            buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
        }

        document.getElementById("result_guid").innerHTML = "The result is : " + buf.join('');
    }
