

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

// Check if three given integer values are in the range 50..99
function check_three_nums() {
  var num1 = +document.getElementById('num1_check_3').value;
  var num2 = +document.getElementById('num2_check_3').value;
  var num3 = +document.getElementById('num3_check_3').value;
  if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)) {
    document.getElementById('result_check_three_nums').innerHTML = "One of the numbers is in the range.";
  } else {
    document.getElementById('result_check_three_nums').innerHTML = "The numbers are out of range.";
  }
}

// Check if a string "Script" presents at 5th (index 4) position in a given string
function check_script() {
  var word = document.getElementById('word_check_script').value;
  result_str = word.substring(0, 4) + word.substring(10, word.length);
  if (word.substring(10, 4) === 'Script') {
    document.getElementById('result_check_script').innerHTML = "The result is : " + result_str;
  } else {
    document.getElementById('result_check_script').innerHTML = "Script not matched : " + word;
  }
}

// Find the largest of three given integers
function max_of_three() {
  var num1 = +document.getElementById('num1_max_of_three').value;
  var num2 = +document.getElementById('num2_max_of_three').value;
  var num3 = +document.getElementById('num3_max_of_three').value;
  // var max_value = 0;
  if (num1 >= num2 && num1 >= num3) {
    document.getElementById('result_max_of_three').innerHTML = "The largest number is : " + num1;
  } else if (num2 >= num1 && num2 >= num3) {
    document.getElementById('result_max_of_three').innerHTML = "The largest number is : " + num2;
  } else if (num3 >= num1 && num3 >= num2) {
    document.getElementById('result_max_of_three').innerHTML = "The largest number is : " + num3;
  }
}

// Find a value which is nearest to 100 from two different given integer values
function near_100() {
  var num1 = +document.getElementById('num1_near_100').value;
  var num2 = +document.getElementById('num2_near_100').value;

  if (num1 != num2) {
  var x1 = Math.abs(num1 - 100);
  var y1 = Math.abs(num2 - 100);
  if (x1 < y1) {
    document.getElementById('result_near_100').innerHTML = "Number : " + num1 + " is closer to 100";
  } else {
    document.getElementById('result_near_100').innerHTML = "Number : " + num2 + " is closer to 100";
  }
} else {
  document.getElementById('result_near_100').innerHTML = "Numbers are equal.";
}
}

// Check if two numbers are in range 40..60 or in the range 70..100 inclusive
function numbers_ranges() {
  var num1 = +document.getElementById('num1_numbers_ranges').value;
  var num2 = +document.getElementById('num2_numbers_ranges').value;
  //console.log(num1);
  if ((num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)) {
    document.getElementById('result_numbers_ranges').innerHTML = "The numbers are in the range.";
  } else {
    document.getElementById('result_numbers_ranges').innerHTML = "The numbers are not in the range."
  }
}

// Find the larger number from the two given positive integers
function max_townums_range() {
  var num1 = +document.getElementById('num1_max_townums_range').value;
  var num2 = +document.getElementById('num2_max_townums_range').value;
  //console.log(num1);
  if (num1 >= 40 && num2 <= 60) {
    if (num1 > num2) {
      document.getElementById('result_max_townums_range').innerHTML = "The largest number is : " + num1 + ".";
    } else {
      document.getElementById('result_max_townums_range').innerHTML = "The largest number is : " + num2 + ".";
    }
  }
  if (num1 < 40 || num2 > 60) {
    document.getElementById('result_max_townums_range').innerHTML = "One or both numbers are out of range.";
  }
}

// Check a given string contains 2 to 4 numbers of a specified character
function check_char() {
  var word = document.getElementById('word_check_char').value;
  var letter = document.getElementById('char_check_char').value;
  var ctr = 0;
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter) {
        ctr++;
    }
  }
  document.getElementById('result_check_char').innerHTML = "There are/is : " + ctr + " letters of" + ' "' + letter + '"' + " in the word " + '"' + word + '"' + ".";
}

// Check if the last digit of the three given positive integers is same
function last_digit() {
  var num1 = +document.getElementById('num1_last_digit').value;
  var num2 = +document.getElementById('num2_last_digit').value;
  var num3 = +document.getElementById('num3_last_digit').value;
  if ((num1 > 0) && num2 > 0 && num3 > 0 && num1 % 10 === num2 % 10 && num2 % 10 === num3 % 10 && num1 % 10 === num3 % 10) {

  //if (num1 % 10 == num2 % 10 && num2 % 10 == num3 % 10 && num1 % num3 % 10) {
  document.getElementById('result_last_digit').innerHTML = "Ther numbers have the last digit the same";
//  }
} else {
  document.getElementById('result_last_digit').innerHTML = "The numbers are not all positive";
}
}

// Create new string with first 3 characters are in lower case
function upper_lower() {
  var word = document.getElementById('word_upper_lower').value;
  if (word.length < 3) {
    document.getElementById('result_upper_lower').innerHTML = "The word is to short : " + (word.toUpperCase());
  } else {
    var front_part = (word.substring(0, 3)).toLowerCase();
    var back_part  = word.substring(3, word.length);
    document.getElementById('result_upper_lower').innerHTML = "The result is : " + front_part + back_part;
  }
}

// Check the total marks of a student in various examinations
function exam_status() {
  var totalmarks = +document.getElementById('totalmarks_exam_status').value;
  var exam = +document.getElementById('exammk_exam_status').value;
  var result = (totalmarks + exam) / 2;
  //console.log(result);
  if (result >= 1 && result <= 100) {
    if(result < 90) {
    document.getElementById('result_exam_status').innerHTML = "You Failed";
  }  else  {
    document.getElementById('result_exam_status').innerHTML = "You Passed";
  }
}
  if(result > 100) {
    document.getElementById('result_exam_status').innerHTML = "The marks are unreal";
  }
}

// Compute the sum of the two given integer
function sortasum() {
  var num1 = +document.getElementById('num1_sortasum').value;
  var num2 = +document.getElementById('num2_sortasum').value;
  const sum_nums = num1 + num2;
  if (sum_nums >= 50 && sum_nums <= 80) {
    document.getElementById('result_sortasum').innerHTML = "The result is : " + 65;
  } else {
    document.getElementById('result_sortasum').innerHTML = "The result is : " + 80;
  }
}

// Check from two given numbers if either one is 8 or their sum or diffrence is 8
function check8() {
  var num1 = +document.getElementById('num1_check8').value;
  var num2 = +document.getElementById('num2_check8').value;
  if (num1 === 8 || num2 === 8) {
    document.getElementById('result_check8').innerHTML = "One of the numbers is Equal to 8.";
  }
  if (num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
    document.getElementById('result_check8').innerHTML = "The sum or the difference between the numbers is equal to 8.";
  } else {
    document.getElementById('result_check8').innerHTML = "The numbers are out of range.";
  }
}

// Check three given numbers, if the three nunbers are same return 30 otherwise return 20 if two numbers are same return 40
function three_numbers() {
  var num1 = +document.getElementById('num1_three_numbers').value;
  var num2 = +document.getElementById('num2_three_numbers').value;
  var num3 = +document.getElementById('num3_three_numbers').value;
  //console.log(num1);
  //console.log(num2);
  //console.log(num3);
  if (num1 == num2 || num2 == num3 || num3 == num1) {
    document.getElementById('result_three_numbers').innerHTML = "40";

  if (num1 == num2 && num2 == num3) {
    document.getElementById('result_three_numbers').innerHTML = "30";
  }
}
  else {
    document.getElementById('result_three_numbers').innerHTML = "20";
  }
}

// Check if three given numbers are increasing in strict mode or in soft mode
function number_order() {
  var num1 = +document.getElementById('num1_number_order').value;
  var num2 = +document.getElementById('num2_number_order').value;
  var num3 = +document.getElementById('num3_number_order').value;
   if (num3 > num2) {
    document.getElementById('result_number_order').innerHTML = "Soft Mode.";
    if (num2 > num1 && num3 > num2) {
      document.getElementById('result_number_order').innerHTML = "Strict Mode.";
    }
  }else {
    document.getElementById('result_number_order').innerHTML = "Undefined.";
  }
}

// Check from three given numbers that two or all of them have the same rightmost digit
function same_last_digit() {
  var num1 = +document.getElementById('num1_same_last_digit').value;
  var num2 = +document.getElementById('num2_same_last_digit').value;
  var num3 = +document.getElementById('num3_same_last_digit').value;
  if ((num1 % 10 === num2 % 10) || (num1 % 10 === num3 % 10) || (num2 % 10 === num3 % 10)) {
    document.getElementById('result_same_last_digit').innerHTML = "All the numbers have the same last digit.";
  } else {
    document.getElementById('result_same_last_digit').innerHTML = "The numbers do not have the same last digit.";
  }
}

// Check from three given integers that if a number is greater than or equal to 20 and less than one of the others
function lessby20_others() {
  var x = +document.getElementById('num1_lessby20_others').value;
  var y = +document.getElementById('num2_lessby20_others').value;
  var z = +document.getElementById('num3_lessby20_others').value;
  if (x >= 20 && (x < y || x < z) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < y || z < x))) {
    document.getElementById('result_lessby20_others').innerHTML = "The numbers are less or equal to 20 and not greater than the others.";
  } else {
    document.getElementById('result_lessby20_others').innerHTML = "The numbers are not in the range.";
  }
}

// Check two given integer values and return true if one of the number is 15 or if their sum or difference is 15
function test_number() {
  var x = +document.getElementById('num1_test_number').value;
  var y = +document.getElementById('num2_test_number').value;
  if (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15) {
    document.getElementById('result_test_number').innerHTML = "One of the numbers is equal to 15 or their sum or diffrence is equal to 15.";
  } else {
    document.getElementById('result_test_number').innerHTML = "No number is equal to 15 or their sum or difference is equal to 15."
  }
}

// Check two given non-negative integers and if one of the number is multiple of 7 or 11
function check_numbers() {
  var x = +document.getElementById('num1_check_numbers').value;
  console.log(x);
  if ((x % 7) === 0 || (x % 11) === 0 /*&& (x % 7) !== (x % 11)*/) {
    document.getElementById('result_check_numbers1').innerHTML = "One of the numbers is a multiple of 11 or 7.";

  } else {
    document.getElementById('result_check_numbers1').innerHTML = "The numbers are not multiple of 11 or 7.";
  }
}

// Check if a number in the range 40..10000 presents in two number
function test_digit() {
  var x = +document.getElementById('num1_test_digit').value;
  var y = +document.getElementById('num2_test_digit').value;
  let x_div = parseInt(x / 40),
      x_mod = x % 40,
      y_div = parseInt(y / 40),
      y_mod = y % 40;
  if (x_div === y_div || x_mod === y_mod || x_div === y_mod || x_mod === y_div) {
    document.getElementById('result_test_digit').innerHTML = "The number presents in two numbers in the range.";
  }else {
    document.getElementById('result_test_digit').innerHTML = "The number does not presents in the range.";
  }
}

// Reverse a given string
function string_reverse() {
  var word = document.getElementById('word_string.reverse').value;
  document.getElementById('result_string_reverse').innerHTML = "The reverse word is : " + word.split("").reverse().join("");
}

// Replace every character in a given string with the character following it in the alphabet
function LetterChanges() {
  var word = document.getElementById('word_LetterChanges').value;
  var s = word.split('');
  for (var i = 0; i < word.length; i++) {

    // Cesar cipher
    switch (s[i]) {
      case ' ':
      break;
      case 'z':
      s[i] = 'a';
      break;
      case 'Z':
      s[i] = 'A';
        break;
      default:
      s[i] = String.fromCharCode(1 + s[i].charCodeAt(0))
        }
        //Upper-case vowels
        switch (s[i]) {
          case 'a': case 'e': case 'i': case 'o': case 'u':
          s[i] = s[i].toUpperCase();
        }
  }
  document.getElementById('result_LetterChanges').innerHTML = s.join('');
}

// Capitalize the first letter of each word of a given string
function capital_letter() {
  var sentace = document.getElementById('sentance_capital_letter').value;
  var str = sentace.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i]
    [0].toUpperCase() + str[i].substring(1);
  }
  document.getElementById('result_capital_letter').innerHTML = str.join(" ");
}

// Convert a given number to hours and minutes
function time_converter() {
  var num1 = +document.getElementById('num1_time_converter').value;
  var hours = Math.floor(num1 / 60);
  var minutes = num1 % 60;
  //console.log(hours);
  //console.log(minutes);
  document.getElementById('result_time_converter').innerHTML = hours + ":" + minutes;
}

// Convert the letters of a given string in alphabetical order
function alphabet_Soup() {
  var word = document.getElementById('word_alphabet_Soup').value;
  document.getElementById('result_alphabet_Soup').innerHTML = word.split("").sort().join("");
}

// Check if the characters a and b are separated by exactly 3 places anywhere in a given string
function ab_Check() {
  var word = document.getElementById('word_ab_Check').value;
  if ((/a...b/).test(word) || (/b...a/).test(word)) {
  document.getElementById('result_ab_Check').innerHTML = '"a" and "b" are separated by exactly by 3 places.';
} else {
  document.getElementById('result_ab_Check').innerHTML = '"a" and "b" are not separated by 3 places.';
}
}

// Count the number of vowels of a given string
function vowel_Count() {
  var word = document.getElementById('word_vowel_Count').value;
  var vowels = word.replace(/[^aeiou]/g, "");
  var numv = vowels.length;
  // console.log(vowels);
  document.getElementById('result_vowel_Count').innerHTML = "Number of vowels : " ;
}

// Check if a given string contains equal number of p's and t's present
function equal_pt() {
  var word = document.getElementById('word_equal_pt').value;
  var word_p = word.replace(/[^p]/g, "");
  var word_s = word.replace(/[^s]/g, "");
  var p_num = word_p.length;
  var s_num = word_s.length;
  if(p_num === s_num){
  document.getElementById('result_equal_pt').innerHTML =  'There are an qual number of "p" and "s" in the word.';
} else {
  document.getElementById('result_equal_pt').innerHTML = 'The number os "p" and "s" is not equal in the word.';
}
}

// Divide two positive numbers and return a string with formatted commas
function division_string() {
  var num1 = +document.getElementById('num1_division_string').value;
  var num2 = +document.getElementById('num2_division_string').value;
  var div = Math.round(num1 / num2).toString();
  var result_array = div.split("");
  if (div <= 1000) {
    for (var i = div.length - 3; i > 0; i -= 3) {
      result_array.splice(i, 0, ",");
    }
    document.getElementById('result_division_string').innerHTML = result_array;
  } else {
  document.getElementById('result_division_string').innerHTML = "The Number resulting from the division is to large.";
  }
}

// Create a new string of specified copies of a given string
function string_copies() {
  var word = document.getElementById('word_string_copies').value;
  var num  = +document.getElementById('num_string_copies').value;

  if (num < 0) {
    document.getElementById('result_string_copies').innerHTML = "Not a valid Number.";
  }else {
    document.getElementById('result_string_copies').innerHTML = "The result is : " + word.repeat(num);
  }
}

// Create a new string of 4 copies of the last 3 characters of a given original string
function newstring() {
  var word = document.getElementById('word_newstring').value;
  if (word.length >= 3) {
    var result_str = word.substring(word.length - 3) + " ";
    document.getElementById('result_newstring').innerHTML = "The result is : " + result_str.repeat(4) + ".";
  } else {
    document.getElementById('result_newstring').innerHTML = "The word is not long enough.";
  }
}

// Extract the first half of a string of even length
function first_half() {
  var word = document.getElementById('word_first_half').value;
  if (word.length % 2 === 0) {
    document.getElementById('result_first_half').innerHTML = "The result is : " + word.slice(0, word.length / 2);
  } else {
    document.getElementById('result_first_half').innerHTML = "The word dosen't have the required length."
  }
}

// Create a new string without the first and last character of a given string
function without_first_end() {
  var word =document.getElementById('word_without_first_end').value;
  document.getElementById('result_without_first_end').innerHTML = "The result is : " + word.substring(1, word.length - 1);
}

// Concatenate two strings except their first character
function concatenate() {
  var word1 = document.getElementById('word1_concatenate').value;
  var word2 = document.getElementById('word2_concatenate').value;
  var str1 = word1.substring(1, word1.length);
  var str2 = word2.substring(1, word2.length);
  document.getElementById('result_concatenate').innerHTML = "The result is : " + str1 + str2 +".";
}

// Move last three character to the start of a specified string
function right_three() {
  var word = document.getElementById('word_right_three').value;
  if(word.length > 1) {
    //console.log(word.slice(-3));
    document.getElementById('result_right_three').innerHTML = "The result is : " + word.slice(-3) + word.slice(0, -3);
  } else {
    document.getElementById('result_right_three').innerHTML = "Return the word : " + word;
  }
}

// Create a string using the middle three characters of a given string of odd length
function middle_three() {
  var word = document.getElementById('word_middle_three').value;
  if(word.length % 2 != 0) {
    mid = (word.length + 1) / 2;
    document.getElementById('result_middle_three').innerHTML = "The result is : " + word.slice(mid - 2, mid + 1);
  } else {
    document.getElementById('result_middle_three').innerHTML = "The result is : " + word;
  }
}

// Concatenate two strings and return the result
function str_con_cat() {
  var word1 = document.getElementById('word1_str_con_cat').value;
  var word2 = document.getElementById('word2_str_con_cat').value;
  const m = Math.min(word1.length, word2.length);
  document.getElementById('result_str_con_cat').innerHTML = "The result is : " + word1.substring(word1.length - m) + word2.substring(word2.length - m);
}

// Test if a string end with "Script"
function end_script() {
  var word = document.getElementById('word_end_script').value;
  if (word.substring(word.length - 6, word.length) === 'Script') {
    document.getElementById('result_end_script').innerHTML = "The word end with 'Script'.";
  } else {
    document.getElementById('result_end_script').innerHTML = "The word dose not end with 'Script'.";
  }
}

// Display the city name if the string begins with "Los" or "New" otherwise return blank
function city_name() {
  var word = document.getElementById('word_city_name').value;
  if (word.length >= 3 && ((word.substring(0, 3) == 'Los') || (word.substring(0, 3) == 'New'))) {
    document.getElementById('result_city_name').innerHTML = "The result is : " + word + '.';
  } else {
    document.getElementById('result_city_name').innerHTML = "Blank.";
  }
}

// Create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'
function nop() {
  var word = document.getElementById('word_nop').value;
  var start_pos = 0;
  var end_pos  = word.length;
  if (word.length > 0 && word.charAt(0) == 'P') {
    start_pos = 1;
  }
  if (word.length > 1 && word.charAt(word.length - 1) == 'P') {
    end_pos--;
  }
  document.getElementById('result_nop').innerHTML = "The result is : " + word.substring(start_pos, end_pos);
}

// Create a new string taking the first and last n characters from a given string
function two_string() {
  var word = document.getElementById('word_two_string').value;
  var num  = +document.getElementById('num_two_string').value;
  var first_part = word.substring(0, num);
  var last_part  = word.substring(word.length - num);
  document.getElementById('result_two_string').innerHTML = "The result is : " + first_part + last_part + ".";
}

// Compute the sum of three elements of a given array of integers of length 3
function sum_three() {
  var num1 = +document.getElementById('num1_sum_three').value;
  var num2 = +document.getElementById('num2_sum_three').value;
  var num3 = +document.getElementById('num3_sum_three').value;
  var nums = [num1, num2, num3];
  document.getElementById('result_sum_three').innerHTML = "The result is : " + (nums[0] + nums[1] + nums[2]);
}

// Rotate the elements left of a given array of integers of length 3
function rotate_elements_left() {
  var num1 = +document.getElementById('num1_rotate_elements_left').value;
  var num2 = +document.getElementById('num2_rotate_elements_left').value;
  var num3 = +document.getElementById('num3_rotate_elements_left').value;
  var nums = [num1, num2, num3];
  document.getElementById('result_rotate_elements_left').innerHTML = "The result is : " + [nums[1], nums[2], nums[0]];
}

// Add two positive integers without carry
function add_two_int_without_carrying() {
  var n1 = +document.getElementById('num1_add_two_int_without_carrying').value;
  var n2 = +document.getElementById('num2_add_two_int_without_carrying').value;
  var result = 0;
  var x = 1;
  while(n1 > 0 && n2 > 0) {
    result += x * ((n1 + n2) % 10);
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
    x *= 10;
  }
  document.getElementById('result_add_two_int_without_carrying').innerHTML = "The result is : " + result;
}

// Find the types of a specified array
function angle_Type() {
var angle = +document.getElementById("angle_angle_Type").value;
  if(angle < 180) {
    document.getElementById("result_angle_Type").innerHTML = "Obtuse angle.";
  }
  if(angle === 90) {
    document.getElementById("result_angle_Type").innerHTML = "Right angle.";
  }
  if(angle < 90) {
    document.getElementById("result_angle_Type").innerHTML = "Acute angle.";
  }
  if(angle === 180) {
  document.getElementById("result_angle_Type").innerHTML = "Straight angle.";
  }
}

// Switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case
function change_case(new_str) {
  var new_str = document.getElementById('word_change_case').value;
  var x = 0;
  var y = 0;

  for (var i = 0; i < new_str.length; i++) {
    if (/[A-Z]/.test(new_str[i])) {
      x++;
    } else y++;
  }

  if (y > x) return document.getElementById('result_change_case').innerHTML = "The result is : " + new_str.toLowerCase() + ".";
  return document.getElementById('result_change_case').innerHTML = "The result is : " + new_str.toUpperCase() + ".";
}

// Rearrange characters of a given string in such way that it will become equal to another given string
function rearrangement_characters() {
  var str1 = document.getElementById('word1_rearrangement_characters').value;
  var str2 = document.getElementById('word2_rearrangement_characters').value;
  var first_set = str1.split(''),
      second_set = str2.split(''),
      result = document.getElementById('result_rearrangement_character').innerHTML = "The words can be rearranged.";

  first_set.sort();
  second_set.sort();

  for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
    if (first_set[i] !== second_set[i]) {
      result = document.getElementById('result_rearrangement_character').innerHTML = "The words can't be rearranged.";
    }

  }
document.getElementById('result_rearrangement_character').innerHTML = result;
}
