<!DOCTYPE html>
<html lang="en">

<head>
	<title>JavaScript String</title>
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
			<div class="col-sm-3">
				<h3>Menu</h3>
				<ul>
					<li><a href="/JS_Basic/Basic.php">JavaScript Basic</a></li>
					<li><a href="/JS_Functions/JavaScript_Functions.php"> JavaScript Functions</a></li>
					<li><a href="/JS_Recursion/JavaScript_Recursion.php"> JavaScript Recursion</a></li>
					<li><a href="/JS_Conditional_Statements/JavaScript_Conditional_Statements.php">JavaScript Conditional Statements</a></li>
					<li><a href="/JS_Array/JavaScript_Array.php">JavaScript Array</a></li>
					<li><a href="/JS_Date/JavaScript_Date.php">JavaScript Date</a></li>
					<li><a href="/JS_String/JavaScript_String.php">JavaScript String</a></li>
					<li><a href="/JS_Math/JavaScript_Math.php">JavaScript Math</a></li>
					<li><a href="/JS_Validation_with_Regular_Expression/JavaScript_Regular_Expression.php">JavaScript Validation with Regular Expression</a></li>
					<li><a href="/JS_DOM/JavaScript_DOM.php">JavaScript DOM</a></li>
					<li><a href="/JS_Drawing/JavaScript_Drawing.php">JavaScript Drawing</a></li>
					<li><a href="/JS_Object/JavaScript_Object.php">JavaScript Object</a></li>
					<li><a href="/JS_Validation/JavaScript_Validation.php">JavaScript Validation</a></li>
					<li><a href="/JS_Searching_Sorting/JavaScript_Searching_Sorting.php">JavaScript Searching and Sorting</a></li>
				</ul>
			</div>

			<?php
    include('Modal_JavaScript_String.html');
     ?>

				<div class="col-sm-5">
					<h2>JavaScript String : 49 Exercises</h2>

					<div class="main">

						<!-- Check whether an 'input' is a string or not -->
						<div class="function1">
							<p>Check whether an 'input' is a string or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_string_show">
        Show Code
      </button>
						</div>

						<!-- Check whether a string is blank or not -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Check whether a string is blank or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_Blank_show">
        Show Code
      </button>
						</div>

						<!-- Split a string and convert it into an array of words -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Split a string and convert it into an array of words :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#string_to_array_show">
        Show Code
      </button>
						</div>

						<!-- Remove a specific number of characters from a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Remove a specific number of characters from a string :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#truncate_string_show">
        Show Code
      </button>
						</div>

						<!-- Convert a string in abbreviated form -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Convert a string in abbreviated form :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Sentence : <input type="text" id="sentence_abbrev_name">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="abbrev_name()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#abbrev_name_show">
        Show Code
      </button>
							<p id="result_abbrev_name"></p>
						</div>

						<!-- Hide email addresses to protect from unauthorized user -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Hide email addresses to protect from unauthorized user :</p>
							<form class="form1" action="index.html" method="post">
								Enter an Email Adress : <input type="text" id="email_protect_email">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="protect_email()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#user_email_show">
        Show Code
      </button>
							<p id="result_protect_email"></p>
						</div>

						<!-- Parameterize a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Parameterize a string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Sentence : <input type="text" id="sentence_string_parameterize">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="string_parameterize()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#string_parameterize_show">
        Show Code
      </button>
							<p id="result_string_parameterize"></p>
						</div>

						<!-- Make capitalize the first letter of a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Make capitalize the first letter of a string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Sentence : <input type="text" id="sentence_capitalize">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="capitalize()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#capitalize_show">
        Show Code
      </button>
							<p id="result_capitalize"></p>
						</div>

						<!-- Make capitalize the first letter of each word in a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Make capitalize the first letter of each word in a string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Sentence : <input type="text" id="sentence_capitalize_Words">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="capitalize_Words()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#capitalize_Words_show">
        Show Code
      </button>
							<p id="result_capitalize_Words"></p>
						</div>

						<!-- Input a string and converts upper case letters to lower and vice versa -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Input a string and converts upper case letters to lower and vice versa :</p>
							<p>(The result can be found in the Consile)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#swapcase_show">
        Show Code
      </button>
						</div>

						<!-- Convert a string into camel case -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Convert a string into camel case :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_camelize">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="camelize()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#camelize_show">
        Show Code
      </button>
							<p id="result_camelize"></p>
						</div>

						<!-- Make a string uncamelize -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Make a string uncamelize :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#uncamelize_show">
        Show Code
      </button>
						</div>

						<!-- Concatenate a specific string for a specific number of times -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Concatenate a specific string for a specific number of times :</p>
							<p>(The result can be found in the Cosnsole)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#repeat_show">
        Show Code
      </button>
						</div>

						<!-- Insert a string within a specific position in another string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Insert a string within a specific position in another string :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#insert_show">
        Show Code
      </button>
						</div>

						<!-- Formats a number to a human-readable string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Formats a number to a human-readable string :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#humanize_format_show">
        Show Code
      </button>
						</div>

						<!-- Truncate a string if it is longer than the specified number of characters -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Truncate a string if it is longer than the specified number of characters :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#text_truncate_show">
        Show Code
      </button>
						</div>

						<!-- Chop a string into chunks of a specific length -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Chop a string into chunks of a specific length :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#string_chop_show">
        Show Code
      </button>
						</div>

						<!-- Count the occurrence of a substring in a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Count the occurrence of a substring in a string :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#count_show">
        Show Code
      </button>
						</div>

						<!-- JavaScript: Escape a HTML string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>JavaScript: Escape a HTML string :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#escape_HTML_show">
        Show Code
      </button>
						</div>

						<!-- Pad (left, right) a string to get to a determined length -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Pad (left, right) a string to get to a determined length :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#formatted_string_show">
        Show Code
      </button>
						</div>

						<!-- Repeat a string a specified times -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Repeat a string a specified times :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#repeat_string_show">
        Show Code
      </button>
						</div>

						<!-- Get a part of string after a specified character -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Get a part of string after a specified character :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subStrAfterChars_show">
        Show Code
      </button>
						</div>

						<!-- Strip leading and trailing spaces from a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Strip leading and trailing spaces from a string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_strip">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="strip()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#strip_show">
        Show Code
      </button>
							<p id="result_strip"></p>
						</div>

						<!-- Truncate a string to a certain number of words -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Truncate a string to a certain number of words :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#truncate_show">
        Show Code
      </button>
						</div>

						<!-- Alphabetize a given string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Alphabetize a given string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_alphabetize_string">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="alphabetize_string()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#alphabetize_string_show">
        Show Code
      </button>
							<p id="result_alpabetize_string"></p>
						</div>

						<!-- Remove the first occurrence of a given 'search string' from a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Remove the first occurrence of a given 'search string' from a string :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#remove_first_occurrence_show">
        Show Code
      </button>
						</div>

						<!-- Convert ASCII to Hexadecimal format -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Convert ASCII to Hexadecimal format :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Number : <input type="text" id="number_ascii_to_hex">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="ascii_to_hexa()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ascii_to_hexa_show">
        Show Code
      </button>
							<p id="result_ascii_to_hexa"></p>
						</div>

						<!-- Convert Hexadecimal to ASCII format -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Convert Hexadecimal to ASCII format :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Number : <input type="text" id="number_hex_to_ascii">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="hex_to_ascii()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#hex_to_ascii_show">
        Show Code
      </button>
							<p id="result_hex_to_ascii"></p>
						</div>

						<!-- Find a word within a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Find a word within a string :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#search_word_show">
        Show Code
      </button>
						</div>

						<!-- Check if a string ends with specified suffix -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Check if a string ends with specified suffix :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#string_endsWith_show">
        Show Code
      </button>
						</div>

						<!-- Escapes special characters for use in HTML -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Escapes special characters for use in HTML :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Something : <input type="text" id="something_escape_html">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="escape_html()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#escape_html_show">
        Show Code
      </button>
							<p id="result_escape_html"></p>
						</div>

						<!-- Remove non-printable ASCII chars -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Remove non-printable ASCII chars :</p>
							<form class="form1" action="index.html" method="post">
								Enter Symbols : <input type="text" id="symbols_remove_non_ascii">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="remove_non_ascii()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#remove_non_ascii_show">
        Show Code
      </button>
							<p id="result_remove_non_ascii"></p>
						</div>

						<!-- Remove non-word characters -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Remove non-word characters :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_remove_non_word">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="remove_non_word()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#remove_non_word_show">
        Show Code
      </button>
							<p id="result_remove_non_word"></p>
						</div>

						<!-- Convert a string to title case -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Convert a string to title case :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_sentenceCase">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="sentenceCase()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sentenceCase_show">
        Show Code
      </button>
							<p id="result_sentenceCase"></p>
						</div>

						<!-- Remove HTML/XML tags from string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Remove HTML/XML tags from string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_strip_html_tags">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="strip_html_tags()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#strip_html_tags_show">
        Show Code
      </button>
							<p id="result_strip_html_tags"></p>
						</div>

						<!-- Create a Zerofilled value with optional +, - sign -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Create a Zerofilled value with optional +, - sign :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#zeroFill_show">
        Show Code
      </button>
						</div>

						<!-- Test case insensitive (except special Unicode characters) string comparison -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Test case insensitive (except special Unicode characters) string comparison :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#compare_strings_show">
        Show Code
      </button>
						</div>

						<!-- Create a case-insensitive search -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Create a case-insensitive search :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#case_insensitive_search_show">
        Show Code
      </button>
						</div>

						<!--  Uncapitalize the first character of a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p> Uncapitalize the first character of a string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_Uncapitalize">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="Uncapitalize()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Uncapitalize_show">
        Show Code
      </button>
							<p id="result_Uncapitalize"></p>
						</div>

						<!-- Uncapitalize the first letter of each word of a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Uncapitalize the first letter of each word of a string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word : <input type="text" id="word_unCapitalize_Words">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="unCapitalize_Words()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#unCapitalize_Words_show">
        Show Code
      </button>
							<p id="result_unCapitalize_Words"></p>
						</div>

						<!-- Capitalize each word in the string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Capitalize each word in the string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Sentence : <input type="text" id="sentence_capitalizeWords">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="capitalizeWords()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#capitalizeWords_show">
        Show Code
      </button>
							<p id="result_capitalizeWords"></p>
						</div>

						<!-- Uncapitalize each word in the string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Uncapitalize each word in the string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Sentence : <input type="text" id="sentence_unCapitalizeWords">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="unCapitalizeWords()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#unCapitalizeWords_show">
        Show Code
      </button>
							<p id="result_unCapitalizeWords"></p>
						</div>

						<!-- Test whether the character at the provided character index is upper case -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Test whether the character at the provided character index is upper case :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#isUpperCaseAt_show">
        Show Code
      </button>
						</div>

						<!-- Test whether the character at the provided character index is lower case -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Test whether the character at the provided character index is lower case :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#isLowerCaseAt_show">
        Show Code
      </button>
						</div>

						<!-- Get humanized number with the correct suffix -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Get humanized number with the correct suffix :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Number : <input type="number" id="number_humanize_num">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="humanize_num()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#humanize_num_show">
        Show Code
      </button>
							<p id="result_humanize_num"></p>
						</div>

						<!-- Test whether a string starts with a specified string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Test whether a string starts with a specified string :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#startsWith_show">
        Show Code
      </button>
						</div>

						<!-- Test whether a string ends with a specified string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Test whether a string ends with a specified string :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#endsWith_show">
        Show Code
      </button>
						</div>


						<!-- Get the successor of a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Get the successor of a string :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Word/Number : <input type="text" id="text_succesor">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="successor()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#succesor_show">
        Show Code
      </button>
							<p id="result_succesor"></p>
						</div>

						<!-- Get unique guid of the specified length, or 32 by default -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Get unique guid of the specified length, or 32 by default :</p>
							<form class="form1" action="index.html" method="post">
								Enter a Number : <input type="number" id="number_guid">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="guid()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#guid_show">
        Show Code
      </button>
							<p id="result_guid"></p>
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
	include("Footer.html");
	?>


	<script src="/JS_Functions/JavaScript_Functions.js">


	</script>
	<script src="JavaScript_String.js"></script>
</body>

</html>
