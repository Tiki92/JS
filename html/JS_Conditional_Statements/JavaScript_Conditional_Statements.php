<!DOCTYPE html>
<html lang="en">

<head>
	<title>JavaScript Conditional Statements</title>
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
    include('Modal_Conditional_Statements.html');
     ?>

				<div class="col-sm-5">
					<h2>JavaScript Conditional Statements : 12 Exercises</h2>

					<div class="main">

						<!-- JavaScript: Accept two integers and display the larger -->
						<div class="function1">
							<p>JavaScript: Accept two integers and display the larger :</p>
							<form class="form1" action="index.html" method="post">
								Enter the first Number : <input type="number" id="number1_theBigger"><br> Enter the second Number : <input type="number" id="number2_theBigger">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="theBigger()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#theBigger_show">
        Show Code
      </button>
							<p id="result_theBigger"></p>
						</div>

						<p>_________________________________________</p>
						<!-- JavaScript: Find the sign of product of three numbers -->
						<div class="function1">
							<p>JavaScript: Find the sign of product of three numbers :</p>
							<form class="form1" action="index.html" method="post">
								Enter the first Number : <input type="number" id="num1_whatSign"><br> Enter the second Number : <input type="number" id="num2_whatSign"><br> Enter the third Number : <input type="number" id="num3_whatSign">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="whatSign()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#whatSign_show">
        Show Code
      </button>
						</div>

						<!-- JavaScript: How to sort three numbers -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>JavaScript: How to sort three numbers :</p>
							<button type="button" class="btn btn-primary" name="button" onclick="ex3(1, -3, 5)">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ex3_show">
        Show Code
      </button>
						</div>

						<!-- JavaScript: Find the largest of five numbers -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>JavaScript: Find the largest of five numbers :</p>
							<button type="button" class="btn btn-primary" name="button" onclick="largest_of_five(-5, -2, -6, 0, -1)">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#largest_of_five_show">
        Show Code
      </button>
						</div>

						<!-- JavaScript: For loop that will iterate from 0 to 15 to find even and odd numbers -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>JavaScript: For loop that will iterate from 0 to 15 to find even and odd numbers :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" name="button" onclick="iterateEvenOdd()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#iterateEvenOdd_show">
        Show Code
      </button>
						</div>

						<!-- JavaScript: Compute the average and grade of the students -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>JavaScript: Compute the average and grade of the students :</p>
							<p>(The grade can be found in the Console)</p>
							<button type="button" class="btn btn-primary" name="button" onclick="avg_students()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#avg_students_show">
        Show Code
      </button>
						</div>

						<!-- JavaScript: Iterates the integers from 1 to 100 -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>JavaScript: Iterates the integers from 1 to 100 :</p>
							<button type="button" class="btn btn-primary" name="button" onclick="iterateTo100()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#iterateTo100_show">
        Show Code
      </button>
						</div>

						<!-- Find the armstrong numbers of 3 digits -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Find the armstrong numbers of 3 digits :</p>
							<p>(THe result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" name="button" onclick="three_digit_armstrong_number()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#three_digit_armstrong_number_show">
        Show Code
      </button>
						</div>

						<!-- Construct a pattern, using a nested for loop -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Construct a pattern, using a nested for loop :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" name="button" onclick="createPattern()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createPattern_show">
        Show Code
      </button>
						</div>

						<!-- Compute the greatest common divisor (GCD) of two positive integers -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Compute the greatest common divisor (GCD) of two positive integers :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" name="button" onclick="GCD()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#GCD_show">
        Show Code
      </button>
						</div>

						<!-- Sum the multiples of 3 and 5 under 1000 -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Sum the multiples of 3 and 5 under 1000 :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" name="button" onclick="sumMultiple()">Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sumMultiple_show">
        Show Code
      </button>
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

	<script type="text/javascript" src="JavaScript_Conditional_Statements_console.js"></script>
	<script src="/JS_Functions/JavaScript_Functions.js">


	</script>
	<script src="JavaScript_Conditional_statements.js"></script>
</body>

</html>
