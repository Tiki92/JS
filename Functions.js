/*global
alert, confirm, console, Debug, opera, prompt, WSH, window, document, setInterval;
*/

// Print Page Function
function print_current_page() {
        window.print();
    }
// Day and Time Function
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurstday", "Friday", "Saturday"];
document.getElementById("Weekday").innerHTML =
"Today is: " + daylist[day] + ".";
//console.log("Today is : " + daylist[day] + ".");
var hours = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
var prepand = (hours >= 12)? " PM ":" AM ";
hours = (hours >= 12)? hours - 12 : hours;
if (hours === 0 && prepand === ' PM ')
{
if (minute === 0 && seconds === 0)
{
        hours = 12;
        prepand = ' Noon';
    }
    else
        {
            hours = 12;
            prepand = ' PM';
        }
}
if (hours === 0 && prepand ===' AM')
    {
        if (minute ===0 && seconds === 0)
            {
                hours = 12;
                prepand =' Midnight';
            }
        else
            {
                hours = 12;
                prepand=' AM';
            }
    }
document.getElementById("hour").innerHTML =
"Current Time: "+ hours + prepand + " : " + minute + " : " + seconds;

// Display current date
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if(dd < 10) {
  dd = '0' + dd;
}
if(mm < 10) {
  mm = '0' + mm;
}
document.getElementById('current_date').innerHTML =
dd +'/' + mm + '/' + yyyy;

//Triangle Perimetre
var side1 = 5;
var side2 = 6;
var side3 = 7;
var perimeter = (side1 + side2 + side3)/2;
var area = Math.sqrt(perimeter*((perimeter - side1)*(perimeter -side2)*(perimeter - side3)));
document.getElementById('triangle').innerHTML =
'The triangle area is:' + area;

// Rotate a String

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
//animate_string();

// Find the leap year
function findLeapYear() {
var year = +document.getElementById('get_leapYear').value;
var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
document.getElementById('leap').innerHTML = x;
document.getElementById('year').innerHTML = "Is the year " + year + " a leap year?";
}
// Find if January is Sunday
function writeJanuary() {
    for (var year1 = 2014; year1 <= 2050; year1++) {
        var d = new Date(year1, 0, 1);
        if (d.getDay() === 0) {
            //document.getElementById('1_January').innerHTML = ("1st January is being a Sunday "+ year);
            //document.write ("1st January is being a Sunday "+ year + "</br>");
            //console.log("1st January is being a Sunday "+ year);
            //let January = document.createElement('li');
            //January.innerHTML = ("1st January is being a Sunday" + year1);
            //January.appendChild(newLi);
            //document.querySelectors('1_January').innerHTML = ("1st January is being a Sunday" + year1")
            print_Jan('In the year ' + year1 + ' 1st is on Sunday');
        }
    }

    function print_Jan(s) {
        var r = document.getElementById('1_January');
        r.innerHTML += s + '<br>';
    }
}

    writeJanuary();

// Guess the number
    function guessNumber() {
        var num = Math.ceil(Math.random() * 10);
        var gnum = +document.getElementById('numberGuess').value;
        if (gnum === num) {
            document.getElementById('number_G').innerHTML =
                "Did you match the number? :" + "Number Matched.";
        } else {
            document.getElementById('number_G').innerHTML =
                "Did you match the number? :" + " No, the number was " + num + ".";
        }
    }

//Days Untill Xmas
    function getXmas() {
        today = new Date();
        var cmas = new Date(today.getFullYear(), 11, 25);
        if (today.getMonth() === 11 && today.getDate() > 25) {
            cmas.setFullYear(cmas.getFullYear() + 1);
        }
        var one_day = 1000 * 60 * 60 * 24;
        document.getElementById('days_until_xmas').innerHTML =
            (Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) + " days left untill Christmas!");
    }

    getXmas();

// Calculate Multiplication and Division
    function multiplyBy() {
        var num1, num2;
        num1 = document.getElementById('firstNumber').value;
        num2 = document.getElementById('secondNumber').value;
        document.getElementById('result').innerHTML = num1 * num2;
    }

    function divideBy() {
        var num1, num2;
        num1 = +document.getElementById('firstNumber').value;
        num2 = +document.getElementById('secondNumber').value;
        document.getElementById('result').innerHTML = num1 / num2;
    }

// Convert fahrenheit to Celsius
    function convetTemp() {
      var temp = +document.getElementById('num_temp').value;
      console.log(temp);
      //var covertFah =
      document.getElementById('toFah').innerHTML = temp + "\xB0C is " + (temp * 9 / 5 + 32) + "\xB0F";
      //var convertCel =
      document.getElementById('toCel').innerHTML = temp + "\xB0F is " + ((temp - 32) * 5 / 9) + "\xB0C"
    }

  /*  function cToF(celsius) {
        var cTemp = celsius;
        var cToFahr = cTemp * 9 / 5 + 32;
        //var message = cTemp + "\xB0C is " + cToFahr + " \xB0F";
        document.getElementById('temperature1').innerHTML =
            cTemp + "\xB0C is " + cToFahr + " \xB0F";
    }

    function fToC(fahrenheit) {
        var fTemp = fahrenheit;
        var fToCel = (fTemp - 32) * 5 / 9;
        //var message = fTemp + '\xB0F is ' + fToCel + '\xB0C';
        document.getElementById('temperature2').innerHTML =
            fTemp + '\xB0F is ' + fToCel + '\xB0C';
    }

    cToF(60);
    fToC(45);
*/
// Get the Website URL
    document.getElementById('get_URL').innerHTML =
        "The Website's URL is : " + document.URL;

// Create a variable using a user-defined name
    function Define() {
        var var_name = 'abcd';
        //var n = 120;
        this[var_name] = 120;
        document.getElementById('user_defined').innerHTML =
            "The user-defined variable is : " + (this[var_name]);
    }

    new Define();

// Get the extension of a filename
    function show_Filename() {
        var filename = "system.php";
        var fn = (filename.split('.').pop());
        //document.getElementById('filename1').innerHTML = (filename.split('.').pop());
        filename = "abc.js";
        var fn1 = (filename.split('.').pop());
        //document.getElementById('filename2').innerHTML = (filename.split('.').pop());
        document.getElementById('filename1').innerHTML =
            "The extensions of the filenames are : " + fn + " and " + fn1 + ".";
    }

    show_Filename();

// Get the difference between a given number
    function diffrence() {
        var n = +document.getElementById('different_number').value;
        if (n <= 13) {
            document.getElementById('dif_btw_number').innerHTML =
                "The difference is : " + (13 - n);
        } else {
            document.getElementById('dif_btw_number').innerHTML =
                "The double of the absolute difference is : " + (n - 13) * 2;
        }
    }

// Compute the sum of the two given integers

    function sumTriple() {
        var x = +document.getElementById('cmp_1').value;
        var y = +document.getElementById('cmp_2').value;
        //console.log(y);
        if (x === y) {
//return 3 * (x + y);
            document.getElementById('the_sum').innerHTML = "The triple of the sum of two numbers is : " + (3 * (x + y));
        } else {
//return (x + y);
            document.getElementById('the_sum').innerHTML = "The sum of two numbers is : " + (x + y);
        }
    }

//Get the absolute diffrence between a specific number and 19
function diff_num() {
  var get_integer = +document.getElementById('get_integer').value;
  if (get_integer <= 19) {
    document.getElementById('19').innerHTML = 'The diffrence is : ' + (19 - get_integer);
  } else {
    document.getElementById('19').innerHTML = 'The triple of absolute diffrence is : ' + (get_integer - 19) * 3;
  }
}

//Check two given numbers and return true if one of the numbers is 50 or is  their sum is 50
function diff_50() {
 var x = +document.getElementById('fst_num').value;
 var y = +document.getElementById('scd_num').value;
 if ((x === 50 || y === 50) || (x + y === 50)) {
   document.getElementById('50_this').innerHTML = 'The numbers are 50';
 } else {
   document.getElementById('50_this').innerHTML = 'The numbers are not 50';
 }
}

//Check a given integer is within 20 of 100 or 400
function testhundred() {
  var num1 = +document.getElementById('cool').value;
  //console.log(num1);
  if (Math.abs(100 - num1) <= 20 || (Math.abs(400 - num1) <= 20)) {
  document.getElementById('slow').innerHTML = 'The number is in the range';
} else {
  document.getElementById('slow').innerHTML = 'The number is out of range';
}
}

// Check two given integers, one is positive and the other is negative
function positive_negative() {
  var num_pos = +document.getElementById('pos_neg_num1').value;
  var num_neg = +document.getElementById('pos_neg_num2').value;
  if ((num_pos < 0 && num_neg > 0) || (num_pos > 0 && num_neg < 0)) {
  document.getElementById('pos_neg_result').innerHTML = 'The Function returned True';
}
else {
  document.getElementById('pos_neg_result').innerHTML = 'The Function returned False';
}
}

// Create a new string adding "Py" in front of a given string
function string_check () {
  var strPy = document.getElementById('string_Py').value;
  //console.log(strPy);
  if (strPy === null || strPy === undefined || strPy.substring(0,2) === 'Py') {
    document.getElementById('result_check').innerHTML = "The word  " + strPy + " has Py in front.";
  } else {
    document.getElementById('result_check').innerHTML = "Py was added to the string" + (" Py" + strPy) + ".";
  }
}

// Remove a character at the specified position of a given string and return the new string
function remove_character() {
  var word = document.getElementById('word_to_remove').value;
  var letter = +document.getElementById('number_letter').value;
  var part1 = word.substring(0, letter);
  var part2 = word.substring(letter + 1, word.length);
  document.getElementById('result_remove').innerHTML = "the letter was removed : " + (part1 + part2);
}

// Create a new string from a given string changing the position of first and last characters
function first_last() {
  var str1 = document.getElementById('word_first_last').value;
  var mid_char = str1.substring(1, str1.length - 1);
  if (str1.length <= 1) {
    document.getElementById('result_first_last').innerHTML = "The word " + '"' + str1 + '"' + " is to short";
  } else {
    document.getElementById('result_first_last').innerHTML = "The new Word is: " + (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
  }
}

// Create a new string from a given string with the first character of the given string added at the front and back
function front_back() {
  var fb_string = document.getElementById('word_front_back').value;
  var first = fb_string.substring(0, 1);
  document.getElementById('result_front_back').innerHTML = "The new Word is: " + first + fb_string + first;
}

// Check if a given positive number is a multiple of 3 or a multiple of 7
function test37() {
  var multi37 = +document.getElementById('number_37').value;
  if (multi37 % 3 === 0 || multi37 % 7 === 0) {
    document.getElementById('result_37').innerHTML = "The number is a multiple of 3 or 7";
  } else {
    document.getElementById('result_37').innerHTML = "The number is not a multiple of 3 or 7";
  }
}

// Create a new string from a given string taking the last 3 characters and added at both the front and back
function front_back3() {
  var fb3_word = document.getElementById('word_front_back3').value;
  var back = fb3_word.substring(fb3_word.length - 3);

  if (fb3_word.length >= 3) {
  document.getElementById('result_fb3').innerHTML = "The new word is : " + back + fb3_word + back;
} else {
  document.getElementById('result_fb3').innerHTML = "The word " + '"' + fb3_word + '"' + " is to short.";
}
}

// Check if a string starts with 'Java' and false otherwise
function start_spec_str() {
  var word = document.getElementById('word_start_spec_str').value;
  var front = word.substring(0, 4);
  if (word.length < 4) {
    document.getElementById('result_start_spec_str').innerHTML = "The word " + '"' + word + '"' + "is to short";
  }
  if (front === 'Java') {
    document.getElementById('result_start_spec_str').innerHTML = "The word begins whith Java";
  } else {
    document.getElementById('result_start_spec_str').innerHTML = "The word dosen't being whit Java";
  }
}

// Check if two given integer values are in the range 50..99
function check_numbers() {
  var num1 = +document.getElementById('number1_check_numbers').value;
  var num2 = +document.getElementById('number2_check_numbers').value;
  if ((num1 >= 50 && num1 <= 99) || (num2 >= 10 && num2 <= 99)) {
    document.getElementById('result_check_numbers').innerHTML = "The function returned True";
  } else {
    document.getElementById('result_check_numbers').innerHTML = "The function returned False";
  }
}
