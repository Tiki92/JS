<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/Style/Basic_style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>

  <!-- Animate String -->
  <div >
  <p id="target">Working hard on this JavaScript Project. Work in Progress...... </p>
  </div>
</head>
<body onload="animate_string('target')">

<div class="container-full-bg">
<div class="container-fluid" id = "Header">
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
        <li><a href = "/JS_Basic/Basic.php">JavaScript Basic</a></li>
        <li><a href = "/JS_Functions/JavaScript_Functions.php"> JavaScript Functions</a></li>
        <li><a href = "/JS_Recursion/JavaScript_Recursion.php"> JavaScript Recursion</a></li>
        <li><a href = "/JS_Conditional_Statements/JavaScript_Conditional_Statements.php">JavaScript Conditional Statements</a></li>
        <li><a href = "/JS_Array/JavaScript_Array.php">JavaScript Array</a></li>
        <li><a href = "/JS_Date/JavaScript_Date.php">JavaScript Date</a></li>
        <li><a href = "/JS_String/JavaScript_String.php">JavaScript String</a></li>
        <li><a href = "/JS_Math/JavaScript_Math.php">JavaScript Math</a></li>
        <li><a href = "/JS_Validation_with_Regular_Expression/JavaScript_Regular_Expression.php">JavaScript Validation with Regular Expression</a></li>
        <li><a href = "/JS_DOM/JavaScript_DOM.php">JavaScript DOM</a></li>
        <li><a href = "/JS_Drawing/JavaScript_Drawing.php">JavaScript Drawing</a></li>
        <li><a href = "/JS_Object/JavaScript_Object.php">JavaScript Object</a></li>
        <li><a href = "/JS_Validation/JavaScript_Validation.php">JavaScript Validation</a></li>
        <li><a href = "/JS_Searching_Sorting/JavaScript_Searching_Sorting.php">JavaScript Searching and Sorting</a></li>
      </ul>
    </div>

    <?php
    include('Modal_JavaScript_Math.html');
     ?>

    <div class="col-sm-5">
      <h2>JavaScript Math : 53 Exercises</h2>

      <div class="main">

        <!-- Convert a number from one base to another -->
        <div class="function1">
          <p>Convert a number from one base to another :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#base_convert_show">
        Show Code
      </button>
        </div>

        <!-- Convert a binary number to a decimal number -->
      <p>_________________________________________</p>
        <div class="function1">
          <p>Convert a binary number to a decimal number :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Number : <input type="number" id="number_bin_to_dec">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="bin_to_dec()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#bin_to_dec_show">
        Show Code
      </button>
          <p id="result_bin_to_dec"></p>
        </div>

        <!-- Convert a decimal number to binary, hexadecimal or octal number -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Convert a decimal number to binary, hexadecimal or octal number :</p>
          <p>(The result can found in Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#dec_to_bho_show">
        Show Code
      </button>
        </div>

        <!-- Generate a random integer -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Generate a random integer :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#rand_show">
        Show Code
      </button>
        </div>

        <!-- Format a number up to specified decimal places -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Format a number up to specified decimal places :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#decimals_show">
        Show Code
      </button>
        </div>

        <!-- Find the highest value in an array -->
        <p>_________________________________________</p>
        <div class="function1">
        <p>Find the highest value in an array :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#max_show">
      Show Code
    </button>
        </div>

        <!-- Find the lowest value in an array -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Find the lowest value in an array :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#min_show">
        Show Code
      </button>
        </div>

        <!-- Greatest common divisor (gcd) of two integers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Greatest common divisor (gcd) of two integers :</p>
          <form class="form1" action="index.html" method="post">
            Enter Number 1 : <input type="number" id="number_gcd_two_numbers"><br>
            Enter Number 2 : <input type="number" id="number2_gcd_two_numbers">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="gcd_two_numbers()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#gcd_two_numbers_show">
        Show Code
      </button>
          <p id="result_gcd_two_numbers"></p>
        </div>

        <!-- Find the Greatest Common Divisor or GCD of more than 2 integers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Find the Greatest Common Divisor or GCD of more than 2 integers :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#gcd_more_than_two_numbers_show">
        Show Code
      </button>
        </div>

        <!-- Least common multiple (LCM) of two numbers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Least common multiple (LCM) of two numbers :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#lcm_two_numbers_show">
        Show Code
      </button>
        </div>

        <!-- Least common multiple (LCM) of more than 2 integers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Least common multiple (LCM) of more than 2 integers :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#lcm_more_than_two_numbers_show">
        Show Code
      </button>
        </div>

        <!-- Find out if a number is a natural number or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Find out if a number is a natural number or not</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_Natural_show">
        Show Code
      </button>
        </div>

        <!-- Test if a number is a power of 2 -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Test if a number is a power of 2 :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Number : <input type="number" id="num_power_of_2">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="power_of_2()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#power_of_2_show">
        Show Code
      </button>
          <p id="result_power_of_2"></p>
        </div>

        <!-- Round a number to a given specific decimal places -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Round a number to a given specific decimal places :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#precise_round_show">
        Show Code
      </button>
        </div>

        <!-- Check whether a value is an integer or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a value is an integer or not :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_Int_show">
        Show Code
      </button>
        </div>

        <!-- Check whether a variable is numeric or not -->
        <p>_________________________________________</p>
        <div class="function1">
        <p>Check whether a variable is numeric or not :</p>
        <form class="form1" action="index.html" method="post">
          Enter a  Number : <input type="text" id="num_is_Numeric">
        </form>
        <button type="button" class="btn btn-primary" name="button" onclick="is_Numeric()">Get Result</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_Numeric_show">
      Show Code
    </button>
        <p id="result_is_Numeric"></p>
        </div>

        <!-- Calculate the sum of values in an array -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate the sum of values in an array :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sum_show">
        Show Code
      </button>
        </div>

        <!-- Calculate the product of values in an array -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate the product of values in an array :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#">
        Show Code
      </button>
        </div>

        <!-- Pythagorean function in JavaScript -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Pythagorean function in JavaScript :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#pythagorean_theorem_show">
        Show Code
      </button>
        </div>

        <!-- Evaluate binomial coefficients -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Evaluate binomial coefficients :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#binomial_show">
        Show Code
      </button>
        </div>

        <!-- Convert an integer into a Roman Numeral -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Convert an integer into a Roman Numeral :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Number : <input type="number" id="number_integer_to_roman">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="integer_to_roman()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#integer_to_roman_show">
        Show Code
      </button>
          <p id="result_integer_to_roman"></p>
        </div>

        <!-- Convert Roman Numeral to Integer -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Convert Roman Numeral to Integer :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#roman_to_Int_show">
        Show Code
      </button>
        </div>

        <!-- Function to create a UUID identifier -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Function to create a UUID identifier :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#create_UUID_show">
        Show Code
      </button>
        </div>

        <!-- Round a number to a specified number of digits and strip extra zeros -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Round a number to a specified number of digits and strip extra zeros :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#parseFloat_show">
        Show Code
      </button>
        </div>

        <!-- Currency math (add, subtract, multiply, division etc.) -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Currency math (add, subtract, multiply, division etc.) :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#currency_show">
        Show Code
      </button>
        </div>

        <!-- Calculate the nth root of a number -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate the nth root of a number :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#nthroot_show">
        Show Code
      </button>
        </div>

        <!-- Calculate degrees between 2 points with inverse Y axis -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate degrees between 2 points with inverse Y axis :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#pointDirection_show">
        Show Code
      </button>
        </div>

        <!-- Round up an integer value to the next multiple of 5 -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Round up an integer value to the next multiple of 5 :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Number : <input type="number" id="num_int_round5">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="int_round5()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#int_round5_show">
        Show Code
      </button>
          <p id="result_int_round5"></p>
        </div>

        <!-- Convert a positive number to negative number -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Convert a positive number to negative number :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Number : <input type="number" id="num_pos_to_neg">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="pos_to_neg()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#pos_to_neg_show">
        Show Code
      </button>
          <p id="result_pos_to_neg"></p>
        </div>

        <!-- Cast a square root of a number to an integer -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Cast a square root of a number to an integer :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Number : <input type="number" id="num_sqrt_to_int">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="sqrt_to_int()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sqrt_to_int_show">
        Show Code
      </button>
          <p id="result_sqrt_to_int"></p>
        </div>

        <!-- Get the highest number from three different numbers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the highest number from three different numbers :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#highest_of_three_show">
        Show Code
      </button>
        </div>

        <!-- Calculate the percentage of a number -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate the percentage of a number :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#percentage_show">
        Show Code
      </button>
        </div>

        <!-- Convert degrees to radians -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Convert degrees to radians :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#degrees_to_radians_show">
        Show Code
      </button>
        </div>

        <!-- Convert radians to degrees -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Convert radians to degrees :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Number : <input type="number" id="num_radians_to_degrees">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="radians_to_degrees()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#radians_to_degrees_show">
        Show Code
      </button>
          <p id="result_radians_to_degrees"></p>
        </div>

        <!-- The Pythagorean theorem -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>The Pythagorean theorem :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#pythagorean_show">
        Show Code
      </button>
        </div>

        <!-- Return values that are powers of two -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Return values that are powers of two :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#isPower_of_two_show">
        Show Code
      </button>
        </div>

        <!-- Limit a value inside a certain range -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Limit a value inside a certain range :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#value_limit_show">
        Show Code
      </button>
        </div>

        <!-- Check if a number is a whole number or has a decimal place -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check if a number is a whole number or has a decimal place :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#number_test_show">
        Show Code
      </button>
        </div>

        <!-- Print an integer with commas as thousands separators-->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Print an integer with commas as thousands separators :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Number : <input type="number" id="num_thousands_separators">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="thousands_separators()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#thousands_separators_show">
        Show Code
      </button>
          <p id="result_thousands_separators"></p>
        </div>

        <!-- Create random background color -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Create random background color :</p>
          <p>(The result can be found in the Background)</p>
          <button type="button" class="btn btn-primary" name="button" onclick="random_bg_color()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#random_bg_color_show">
        Show Code
      </button>
        </div>

        <!-- Count the digits of an integer -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Count the digits of an integer :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Number : <input type="number" id="num_digits_count">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="digits_count()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#digits_count_show">
        Show Code
      </button>
          <p id="result_digits_count"></p>
        </div>

        <!-- Calculate the combination of n and r -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate the combination of n and r :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#product_Range_show">
        Show Code
      </button>
        </div>

        <!-- Get all prime numbers from 0 to a specified number -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get all prime numbers from 0 to a specified number :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Number : <input type="number" id="num_primeFactorsTo">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="primeFactorsTo()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#primeFactorsTo_show">
        Show Code
      </button>
          <p id="result_primeFactorsTo"></p>
        </div>

        <!-- Show the Hamming numbers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Show the Hamming numbers :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Hamming_show">
        Show Code
      </button>
        </div>

        <!-- Subtract elements from one another in an array -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Subtract elements from one another in an array :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subtraction_show">
        Show Code
      </button>
        </div>

        <!-- Calculate the divisor and modulus of two integers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate the divisor and modulus of two integers :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#div_mod_show">
        Show Code
      </button>
        </div>

        <!-- Calculate the extended Euclid Algorithm or extended GCD -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate the extended Euclid Algorithm or extended GCD :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Euclid_gcd_show">
        Show Code
      </button>
        </div>

        <!-- Calculate the falling factorial of a number -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate the falling factorial of a number :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#fallingFactorial_show">
        Show Code
      </button>
        </div>

        <!-- Calculate Lanczos approximation gamma -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate Lanczos approximation gamma :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Lanczos_Gamma_show">
        Show Code
      </button>
        </div>

        <!-- Add two complex numbers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Add two complex numbers :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Complex_show">
        Show Code
      </button>
        </div>

        <!-- Subtract two complex numbers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Subtract two complex numbers :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subComplex_show">
        Show Code
      </button>
        </div>

        <!-- Multiply two complex numbers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Multiply two complex numbers :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mulComplex_show">
        Show Code
      </button>
        </div>

        <!-- Divide two complex numbers -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Divide two complex numbers :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#divComplex_show">
        Show Code
      </button>
        </div>
      </div>
    </div>

      <div class="col-sm-4">
        <h3>Console</h3>
        <div class ="logs">
          <ul id="myLog">
          <p id=""></p>
        </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="jumbotron text-center" style="margin-bottom:0">
  <p>Footer</p>
  </div>

  <script src = "/JS_Functions/JavaScript_Functions.js"> </script>
  <script src="JavaScript_Math.js"></script>
  </body>
  </html>
