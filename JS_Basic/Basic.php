<!DOCTYPE html>
<html lang="en">

<head>
	<title>JavaScript Basic</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/Style/Basic_style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>

	<!-- Animate String -->
	<div>
		<p id="target">Working hard on this JavaScript Project. Work in Progress...... </p>
	</div>
</head>

<body onload="animate_string('target')">

	<div class="container-full-bg">
		<div class="container-fluid" id="Header">
			<div class="container">
				<img src="/Media/Header_Pages.png" alt="JS, HTML, CSS">
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row">
			<?php
			include("../Include/Menu.html");
			?>

			<?php
    include('Modal.html');
     ?>
				<div class="col-sm-5">
					<h2>JavaScript Basic : 130 Exercises</h2>
					<!--  <p>_________________________________________</p> -->

					<div class="main">

						<!--Print Current Page-->
						<div class="container-fluid" id="pint_Page">
							<p></p>
							<p>Click the button to print the current page:</p>
							<button type="button" class="btn btn-primary" onclick="print_current_page()">Print this page</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#pint_Page_show">
    Show Code
  </button>
						</div>

						<p>_________________________________________</p>
						<!--Show weekday and current time -->
						<div id="get_Date">
							<p>Show weekday and current time :</p>
							<p id="Weekday"></p>
							<p id="hour"></p>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#get_Date_show">
        Show Code
      </button>
						</div>

						<p>_________________________________________</p>
						<!--Get Current Date -->
						<div id="get_current_date">
							<p>Current Date :</p>
							<p id="current_date"></p>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#current_date_show">
      Show Code
    </button>
						</div>

						<p>_________________________________________</p>
						<!--Triangle Perimetre-->
						<div id="triangle_area">
							<p class="context"> Triangle sides: 5, 6, 7.</p>
							<p id="triangle"></p>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#triangle_area_show">
      Show Code
    </button>
						</div>


						<p>_________________________________________</p>
						<!-- Find the leap year -->
						<div id="leap_Year">
							<p>Find the leap year</p>
							<form class="fLYear" action="index.html" method="post">
								Input a Year : <input type="number" id="get_leapYear">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="findLeapYear()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#get_leapYear_show">
      Show Code
    </button>
							<p id="year"></p>
							<p id="leap"></p>
						</div>

						<p>_________________________________________</p>
						<!--Find if 1st January is Sunday -->
						<p id="January">Find when 1st January is on Sunday:</p>
						<div id="1_January">
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#1_January_show">
      Show Code
    </button><br>
						</div>

						<p>_________________________________________</p>
						<!-- Gues the number -->
						<div id="Guess_number">
							<p></p>
							<form class="Guess" action="index.html" method="post">
								Guess the number between 1 and 10 inclusive : <input type="number" id="numberGuess"><br>
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="guessNumber()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Guess_number_show">
      Show Code
    </button>
							<p id="number_G"> </p>
						</div>

						<p>_________________________________________</p>
						<!-- Days Untill Christmas -->
						<div id="Christmas">
							<p>How many days are untill Christmas?</p>
							<p id="days_until_xmas"></p>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#days_until_xmas_show">
      Show Code
    </button>
						</div>

						<p>_________________________________________</p>
						<!--Calculate Multiplication and Division -->
						<div id="Calculator_div">
							<form class="Calculator" action="index.html" method="post">
								1st Number : <input type="text" id="firstNumber" /><br> 2nd Number: <input type="text" id="secondNumber" /><br>
							</form>
							<button type="button" class="btn btn-primary" onclick="multiplyBy()">Multiply</button>
							<button type="button" class="btn btn-primary" onclick="divideBy()">Divide</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Calculator_show">
      Show Code
    </button>
							<p>The Result is : <br>
								<span id="result"></span>
							</p>
						</div>

						<p>_________________________________________</p>
						<!-- Convert temperatures to and from Celsius, fahrenheit -->
						<div id="fah_To_celsius">
							<p>Convert Temperature Celsius to Fahrenheit</p>
							<form class="Converter" action="index.html" method="post">
								Input Temperature : <input type="number" id="num_temp">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="convetTemp()">Convert Temperature</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#fah_To_celsius_show">
      Show Code
    </button>
							<p id="toFah"></p>
							<p id="toCel"></p>
						</div>

						<p>_________________________________________</p>
						<!--
      <div id="fah_To_celsius">
        <p>Converting temperatures to and from Celsius, Fahrenheit:</p>
        <p id="temperature1"></p>
        <p id="temperature2"></p>
      </div>
      -->
						<!-- Get the Website URL -->
						<div id="Web_URL">
							<p id="get_URL"></p>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Web_URL_show">
      Show Code
    </button>
						</div>

						<p>_________________________________________</p>
						<!-- Create a variable using a user-defined name -->
						<div id="create_user_defined">
							<p id="user_defined"></p>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#create_user_defined_show">
      Show Code
    </button>
						</div>

						<p>_________________________________________</p>
						<!-- Get the extension of a filename -->
						<div id="extension_filename">
							<p id="filename1"></p>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#extension_filename_show">
      Show Code
    </button>
						</div>

						<p>_________________________________________</p>
						<!-- Get the diffrence between a given number -->
						<div id="diffrence_between">
							<p>Get the difference between a given number :</p>
							<form class="get_diffrence_between_num" action="index.html" method="post">
								Input a Number : <input type="number" id="different_number">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="diffrence()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#diffrence_between_show">
      Show Code
    </button>
							<p id="dif_btw_number"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Compute the sum of the two given integers -->
						<div id="Compute_integers">
							<form class="compute_int" action="index.html" method="post">
								Input the value of X : <input type="number" id="cmp_1"><br> Input the value of Y : <input type="number" id="cmp_2">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="sumTriple()"> Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Compute_integers_show">
      Show Code
    </button>
							<p id="the_sum"></p>
						</div>

						<p>_________________________________________</p>
						<!--Get the absolute diffrence between a specific number and 19 -->
						<div id="diff_19">
							<p>Get the absolute diffrence between a specific number and 19 : </p>
							<form class="get_diff_19" action="index.html" method="post">
								Number : <input type="number" id="get_integer"><br>
							</form>
							<p></p>
							<button type="button" class="btn btn-primary" onclick="diff_num()" name="button">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#diff_19_show">
       Show Code
     </button>
							<p id="19"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check two given numbers and return true if one of the numbers is 50 or is  their sum is 50 -->
						<div id="if_50">
							<p>Check two given numbers :</p>
							<form class="50_form">
								Number : <input type="number" id="fst_num"><br> Number2:
								<input type="number" id="scd_num">
							</form>
							<p></p>
							<button type="button" class="btn btn-primary" name="button" onclick="diff_50()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#if_50_show">
    Show Code
  </button>
							<p id="50_this"></p>
						</div>

						<p>_________________________________________</p>
						<!--Check a given integer is within 20 of 100 or 400 -->
						<div id="range_100">
							<p>Check a given integer is within 20 of 100 or 400 :</p>
							<form class="range_400" action="index.html" method="post">
								Enter a Number : <input id="cool">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="testhundred()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#range_100_show">
      Show Code
    </button>
							<p id="slow"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check two given integers, one is positive and one is negative -->
						<div id="pos_neg">
							<p>Check two given integers, one is positive and the other is negative :</p>
							<form class="pos_neg_form" action="index.html" method="post">
								Enter a Number1 : <input id="pos_neg_num1"><br> Enter a Number2 : <input id="pos_neg_num2">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="positive_negative()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#positive_negative_show">
      Show Code
    </button>
							<p id="pos_neg_result"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create a new string adding "Py" in front of a given string -->
						<div id="check_Py_string">
							<p>Create a new string adding "Py" in front of a given string :</p>
							<form class="get_string_Py" action="index.html" method="post">
								Inout a Word : <input type="text" id="string_Py">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="string_check()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#check_Py_string_show">
      Show Code
    </button>
							<p id="result_check"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Remove a character at the specified position of a given string and return the new string -->
						<div id="remove_character_string">
							<p>Remove a character at the specified position of a given string and return the new string</p>
							<form class="remove_letter" action="index.html" method="post">
								Input the Word : <input type="text" id="word_to_remove"> <br> Input the number of the letter to remove : <input type="text" id="number_letter">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="remove_character()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#remove_character_show">
      Show Code
    </button>
							<p id="result_remove"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create a new string from a given string changing the position of first and last characters -->
						<div class="function1">
							<p>Create a new string from a given string changing the position of first and last characters:</p>
							<form class="form1" action="index.html" method="post">
								Input a word : <input type="text" id="word_first_last">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="first_last()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#word_first_last_show">
      Show Code
    </button>
							<p id="result_first_last"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create a new string from a given string with the first character of the given string added at the front and back -->
						<div class="function1">
							<p>Create a new string from a given string with the first character of the given string added at the front and back:</p>
							<form class="form1" action="index.html" method="post">
								Input a Word: <input type="text" id="word_front_back">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="front_back()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#word_front_back_show">
      Show Code
    </button>
							<p id="result_front_back"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if a given positive number is a multiple of 3 or a multiple of 7 -->
						<div class="function1">
							<p>Check if a given positive number is a multiple of 3 or a multiple of 7:</p>
							<form class="form1" action="index.html" method="post">
								Input a Number: <input type="number" id="number_37">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="test37()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#number_37_show">
      Show Code
    </button>
							<p id="result_37"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create a new string from a given string taking the last 3 characters and added at both the front and back -->
						<div class=function1>
							<p>Create a new string from a given string taking the last 3 characters and added at both the front and back:</p>
							<form class="form1" action="index.html" method="post">
								Input a Word : <input type="text" id="word_front_back3">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="front_back3()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#front_back3_show">
      Show Code
    </button>
							<p id="result_fb3"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if a string starts with 'Java' and false otherwise -->
						<div class="function1">
							<p>Check if a string starts with 'Java' and false otherwise:</p>
							<form class="form1" action="index.html" method="post">
								Input a Word : <input type="text" id="word_start_spec_str">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="start_spec_str()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#start_spec_str_show">
      Show Code
    </button>
							<p id="result_start_spec_str"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if two given integer values are in the range 50..99 -->
						<div class="function1">
							<p>Check if two given integer values are in the range 50..99 :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="number1_check_numbers"><br> Number2 : <input type="number" id="number2_check_numbers">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="check_numbers()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#check_numbers_show">
      Show Code
    </button>
							<p id="result_check_numbers"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if three given integer values are in the range 50..99 -->
						<div class="function1">
							<p>Check if three given integer values are in the range 50..99 :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_check_3"><br> Number2 : <input type="number" id="num2_check_3"><br> Number3 : <input type="number" id="num3_check_3">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="check_three_nums()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#check_three_nums_show">
      Show Code
    </button>
							<p id="result_check_three_nums"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if a string "Script" presents at 5th (index 4) position in a given string -->
						<div class="function1">
							<p>Check if a string "Script" presents at 5th (index 4) position in a given string :</p>
							<form class="form1" action="index.html" method="post">
								Input a Word : <input type="text" id="word_check_script">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="check_script()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#check_script_show">
      Show Code
    </button>
							<p id="result_check_script"></p>
						</div>

						<p>_________________________________________</p>
						<!--  Find the largest of three given integers -->
						<div class="function1">
							<p>Find the largest of three given integers :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_max_of_three"><br> Number2 : <input type="number" id="num2_max_of_three"><br> Number3 : <input type="number" id="num3_max_of_three">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="max_of_three()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#max_of_three_show">
      Show Code
    </button>
							<p id="result_max_of_three"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Find a value which is nearest to 100 from two different given integer values -->
						<div class="function1">
							<p>Find a value which is nearest to 100 from two different given integer values :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_near_100"><br> Number2 : <input type="number" id="num2_near_100">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="near_100()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#near_100_show">
      Show Code
    </button>
							<p id="result_near_100"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if two numbers are in range 40..60 or in the range 70..100 inclusive -->
						<div class="function1">
							<p>Check if two numbers are in range 40..60 or in the range 70..100 inclusive :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_numbers_ranges"><br> Number2 : <input type="number" id="num2_numbers_ranges">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="numbers_ranges()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#numbers_ranges_show">
      Show Code
    </button>
							<p id="result_numbers_ranges"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Find the larger number from the two given positive integers -->
						<div class="function1">
							<p>Find the larger number from the two given positive integers :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_max_townums_range"><br> Number2 : <input type="number" id="num2_max_townums_range">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="max_townums_range()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#max_townums_range_show">
      Show Code
    </button>
							<p id="result_max_townums_range"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check a given string contains 2 to 4 numbers of a specified character -->
						<div class="function1">
							<p>Check a given string contains 2 to 4 numbers of a specified character :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_check_char"><br> Enter a Letter : <input type="text" id="char_check_char">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="check_char()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#check_char_show">
      Show Code
    </button>
							<p id="result_check_char"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if the last digit of the three given positive integers is same -->
						<div class="function1">
							<p>Check if the last digit of the three given positive integers is same :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_last_digit"><br> Number2 : <input type="number" id="num2_last_digit"><br> Number3 : <input type="number" id="num3_last_digit">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="last_digit()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#last_digit_show">
      Show Code
    </button>
							<p id="result_last_digit"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create new string with first 3 characters are in lower case -->
						<div class="function1">
							<p>Create new string with first 3 characters are in lower case :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_upper_lower">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="upper_lower()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#upper_lower_show">
      Show Code
    </button>
							<p id="result_upper_lower"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check the total marks of a student in various examinations -->
						<div class="function1">
							<p>Check the total marks of a student in various examinations</p>
							<form class="form1" action="index.html" method="post">
								Enter total marks : <input type="number" id="totalmarks_exam_status"><br> Enter last exam mark : <input type="number" id="exammk_exam_status">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="exam_status()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exam_status_show">
      Show Code
    </button>
							<p id="result_exam_status"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Compute the sum of the two given integer -->
						<div class="function1">
							<p>Compute the sum of the two given integer :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_sortasum"><br> Number2 : <input type="number" id="num2_sortasum">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="sortasum()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sortasum_show">
      Show Code
    </button>
							<p id="result_sortasum"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check from two given numbers if either one is 8 or their sum or diffrence is 8 -->
						<div class="function1">
							<p>Check from two given numbers if either one is 8 or their sum or diffrence is 8 :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_check8"><br> Number2 : <input type="number" id="num2_check8">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="check8()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#check8_show">
      Show Code
    </button>
							<p id="result_check8"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check three given numbers, if the three nunbers are same return 30 otherwise return 20 if two numbers are same return 40 -->
						<div class="function1">
							<p>Check three given numbers, if the three nunbers are same return 30 otherwise return 20 if two numbers are same return 40 :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_three_numbers"><br> Number2 : <input type="number" id="num2_three_numbers"><br> Number3 : <input type="number" id="num3_three_numbers">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="three_numbers()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#three_numbers_show">
      Show Code
    </button>
							<p id="result_three_numbers"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if three given numbers are increasing in strict mode or in soft mode -->
						<div class="function1">
							<p>Check if three given numbers are increasing in strict mode or in soft mode :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_number_order"><br> Number2 : <input type="number" id="num2_number_order"><br> Number3 : <input type="number" id="num3_number_order">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="number_order()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#number_order_show">
      Show Code
    </button>
							<p id="result_number_order"></p>


						</div>

						<p>_________________________________________</p>
						<!-- Check from three given numbers that two or all of them have the same rightmost digit -->
						<div class="function1">
							<p>Check from three given numbers that two or all of them have the same rightmost digit :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_same_last_digit"><br> Number2 : <input type="number" id="num2_same_last_digit"><br> Number3 : <input type="number" id="num3_same_last_digit">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="same_last_digit()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#same_last_digit_show">
      Show Code
    </button>
							<p id="result_same_last_digit"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check from three given integers that if a number is greater than or equal to 20 and less than one of the others -->
						<div class="function1">
							<p>Check from three given integers that if a number is greater than or equal to 20 and less than one of the others :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_lessby20_others"><br> Number2 : <input type="number" id="num2_lessby20_others"><br> Number3 : <input type="number" id="num3_lessby20_others">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="lessby20_others()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#lessby20_others_show">
      Show Code
    </button>
							<p id="result_lessby20_others"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check two given integer values and return true if one of the number is 15 or if their sum or difference is 15 -->
						<div class="function1">
							<p>Check two given integer values and return true if one of the number is 15 or if their sum or difference is 15 :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_test_number"><br> Number2 : <input type="number" id="num2_test_number">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="test_number()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#test_number_show">
      Show Code
    </button>
							<p id="result_test_number"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check two given non-negative integers and if one of the number is multiple of 7 or 11 -->
						<div class="function1">
							<p>Check two given non-negative integers and if one of the number is multiple of 7 or 11 :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_check_numbers"><br>
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="check_numbers1()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#check_numbers1_show">
      Show Code
    </button>
							<p id="result_check_numbers1"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if a number in the range 40..10000 presents in two number -->
						<div class="function1">
							<p>Check if a number in the range 40..10000 presents in two number :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_test_digit"><br> Number2 : <input type="number" id="num2_test_digit">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="test_digit()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#test_digit_show">
      Show Code
    </button>
							<p id="result_test_digit"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Reverse a given string -->
						<div class="function1">
							<p>Reverse a given string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_string.reverse">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="string_reverse()">Get Result</button>
							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#string_reverse_show">
      Show Code
    </button>
							<p id="result_string_reverse"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Replace every character in a given string with the character following it in the alphabet -->
						<div class="function1">
							<p>Replace every character in a given string with the character following it in the alphabet :</p>
							<form class="form1" action="index.html" method="post">
								Ener a Word : <input type="text" id="word_LetterChanges">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="LetterChanges()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#word_LetterChanges_show">
      Show Code
    </button>
							<p id="result_LetterChanges"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Capitalize the first letter of each word of a given string -->
						<div class="function1">
							<p>Capitalize the first letter of each word of a given string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Sentance : <input type="text" id="sentance_capital_letter">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="capital_letter()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#capital_letter_show">
      Show Code
    </button>
							<p id="result_capital_letter"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Convert a given number to hours and minutes -->
						<div class="function1">
							<p>Convert a given number to hours and minutes :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_time_converter">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="time_converter()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#time_converter_show">
      Show Code
    </button>
							<p id="result_time_converter"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Convert the letters of a given string in alphabetical order -->
						<div class="function1">
							<p>Convert the letters of a given string in alphabetical order :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_alphabet_Soup">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="alphabet_Soup()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#alphabet_Soup_show">
      Show Code
    </button>
							<p id="result_alphabet_Soup"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if the characters a and b are separated by exactly 3 places anywhere in a given string -->
						<div class="function1">
							<p>Check if the characters a and b are separated by exactly 3 places anywhere in a given string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_ab_Check">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="ab_Check()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ab_Check_show">
      Show Code
    </button>
							<p id="result_ab_Check"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Count the number of vowels of a given string -->
						<div class="function1">
							<p>Count the number of vowels of a given string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_vowel_Count">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="vowel_Count()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#vowel_Count_show">
      Show Code
    </button>
							<p id="result_vowel_Count"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check if a given string contains equal number of p's and t's present -->
						<div class="function1">
							<p>Check if a given string contains equal number of p's and t's present :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_equal_pt">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="equal_pt()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#equal_pt_show">
      Show Code
    </button>
							<p id="result_equal_pt"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Divide two positive numbers and return a string with formatted commas -->
						<div class="function1">
							<p>Divide two positive numbers and return a string with formatted commas :</p>
							<form class="form1" action="index.html" method="post">
								Number1 : <input type="number" id="num1_division_string"><br> Number2 : <input type="number" id="num2_division_string">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="division_string()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#division_string_show">
      Show Code
    </button>
							<p id="result_division_string"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create a new string of specified copies of a given string -->
						<div class="function1">
							<p>Create a new string of specified copies of a given string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_string_copies"><br> Enter a Number : <input type="number" id="num_string_copies">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="string_copies()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#string_copies_show">
      Show Code
    </button>
							<p id="result_string_copies"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create a new string of 4 copies of the last 3 characters of a given original string -->
						<div class="function1">
							<p>Create a new string of 4 copies of the last 3 characters of a given original string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_newstring">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="newstring()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#newstring_show">
      Show Code
    </button>
							<p id="result_newstring"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Extract the first half of a string of even length -->
						<div class="function1">
							<p>Extract the first half of a string of even length :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_first_half">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="first_half()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#first_half_show">
      Show Code
    </button>
							<p id="result_first_half"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create a new string without the first and last character of a given string -->
						<div class="function1">
							<p>Create a new string without the first and last character of a given string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_without_first_end">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="without_first_end()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#without_first_end_show">
      Show Code
    </button>
							<p id="result_without_first_end"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Concatenate two strings except their first character -->
						<div class="function1">
							<p>Concatenate two strings except their first character :</p>
							<form class="form1" action="index.html" method="post">
								Enter Word1 : <input type="text" id="word1_concatenate"><br> Enter Word2 : <input type="text" id="word2_concatenate">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="concatenate()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#concatenate_show">
      Show Code
    </button>
							<p id="result_concatenate"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Move last three character to the start of a specified string -->
						<div class="function1">
							<p>Move last three character to the start of a specified string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_right_three">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="right_three()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#right_three_show">
      Show Code
    </button>
							<p id="result_right_three"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create a string using the middle three characters of a given string of odd length -->
						<div class="function1">
							<p>Create a string using the middle three characters of a given string of odd length :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_middle_three">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="middle_three()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#middle_three_show">
      Show Code
    </button>
							<p id="result_middle_three"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Concatenate two strings and return the result -->
						<div class="function1">
							<p>Concatenate two strings and return the result :</p>
							<form class="form1" action="index.html" method="post">
								Enter Word1 : <input type="text" id="word1_str_con_cat"><br> Enter Word2 : <input type="text" id="word2_str_con_cat">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="str_con_cat()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#str_con_cat_show">
      Show Code
    </button>
							<p id="result_str_con_cat"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Test if a string end with "Script" -->
						<div class="function1">
							<p>Test if a string end with "Script :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_end_script">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="end_script()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#end_script_show">
      Show Code
    </button>
							<p id="result_end_script"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Display the city name if the string begins with "Los" or "New" otherwise return blank -->
						<div class="function1">
							<p>Display the city name if the string begins with "Los" or "New" otherwise return blank :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_city_name">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="city_name()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#city_name_show">
      Show Code
    </button>
							<p id="result_city_name"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P' -->
						<div class="function1">
							<p>Create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P' :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_nop">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="nop()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#nop_show">
      Show Code
    </button>
							<p id="result_nop"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Create a new string taking the first and last n characters from a given string -->
						<div class="function1">
							<p>Create a new string taking the first and last n characters from a given string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_two_string"><br> Enter a Number : <input type="number" id="num_two_string">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="two_string()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#two_string_show">
      Show Code
    </button>
							<p id="result_two_string"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Compute the sum of three elements of a given array of integers of length 3 -->
						<div class="function1">
							<p>Compute the sum of three elements of a given array of integers of length 3 :</p>
							<form class="form1" action="index.html" method="post">
								Enter Number1 : <input type="number" id="num1_sum_three"><br> Enter Number2 : <input type="number" id="num2_sum_three"><br> Enter Number3 : <input type="number" id="num3_sum_three">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="sum_three()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sum_three_show">
      Show Code
    </button>
							<p id="result_sum_three"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Rotate the elements left of a given array of integers of length 3 -->
						<div class="function1">
							<p>Rotate the elements left of a given array of integers of length 3 :</p>
							<form class="form1" action="index.html" method="post">
								Enter Number1 : <input type="number" id="num1_rotate_elements_left"><br> Enter Number2 : <input type="number" id="num2_rotate_elements_left"><br> Enter Number3 : <input type="number" id="num3_rotate_elements_left">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="rotate_elements_left()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#rotate_elements_left_show">
      Show Code
    </button>
							<p id="result_rotate_elements_left"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Add two positive integers without carry -->
						<div class="function1">
							<p>Add two positive integers without carry :</p>
							<form class="form1" action="index.html" method="post">
								Enter Number1 : <input type="number" id="num1_add_two_int_without_carrying"><br> Enter Number2 : <input type="number" id="num2_add_two_int_without_carrying"><br>
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="add_two_int_without_carrying()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add_two_int_without_carrying_show">
      Show Code
    </button>
							<p id="result_add_two_int_without_carrying"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Find the types of a specified array -->
						<div class="function1">
							<p>Find the types of a specified array :</p>
							<form class="form1" action="index.html" method="post">
								Enter Angle : <input type="number" id="angle_angle_Type">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="angle_Type()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#angle_Type_show">
      Show Code
    </button>
							<p id="result_angle_Type"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case -->
						<div class="function1">
							<p>Switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_change_case">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="change_case()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#change_case_show">
      Show Code
    </button>
							<p id="result_change_case"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Rearrange characters of a given string in such way that it will become equal to another given string -->
						<div class="function1">
							<p>Rearrange characters of a given string in such way that it will become equal to another given string :</p>
							<form class="form1" action="index.html" method="post">
								Enter Word1 : <input type="text" id="word1_rearrangement_characters"><br> Enter Word2 : <input type="text" id="word2_rearrangement_characters">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="rearrangement_characters()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#rearrangement_characters_show">
      Show Code
    </button>
							<p id="result_rearrangement_character"></p>
						</div>

						<p>_________________________________________</p>
						<!-- Check whether a given string represents a correct sentence or not -->
						<div class="function1">
							<p>Check whether a given string represents a correct sentence or not :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Sentence : <input type="text" id="sentance_is_correct_Sentance" size="80">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="is_correct_Sentace()">Get Result</button>

							<!-- Button to Open the Modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_correct_Sentace_show">
      Show Code
    </button>
							<p id="result_is_correct_Sentence"></p>
						</div>
					</div>
				</div>

				<div class="col-sm-4">
					<h3>Console</h3>
					<div class="logs">
						<ul id="myLog">
							<p id=""></p>
						</ul>
					</div>
				</div>
		</div>
	</div>

	<?php
	include("../Footer.html");
	?>

	<script src="Functions.js">


	</script>
	<script src="Function_console.js">


	</script>
	<script src="JavaScript_Functions.js">


	</script>
</body>

</html>
