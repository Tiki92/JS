<!DOCTYPE html>
<html lang="en">

<head>
	<title>JavaScript Functions</title>
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

			<div class="col-sm-5">
				<h2>JavaScript Functions : 29 Exercises</h2>

				<div class="main">

					<!-- JavaScript: Reverse a number -->
					<div class="function1">
						<p>JavaScript: Reverse a number :</p>
						<form class="form1" action="index.html" method="post">
							Enter a Number : <input type="number" id="number_reverse_a_number">
						</form>
						<button type="button" class="btn btn-primary" name="button" onclick="reverse_a_number()">Get Result</button>
						<!-- Button to Open the Modal -->
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#number_reverse_a_number_show">
        Show Code
      </button>
						<p id="result_reverse_a_number"></p>
						<?php
          include('Modal_Functions.html');
           ?>
					</div>

					<p>_________________________________________</p>
					<!-- JavaScript: Check whether a passed string is palindrome or not -->
					<div class="function1">
						<p>JavaScript: Check whether a passed string is palindrome or not :</p>
						<form class="form1" action="index.html" method="post">
							Ener a Word : <input type="text" id="word_check_Palindrome">
						</form>
						<button type="button" class="btn btn-primary" name="button" onclick="check_Palindrome()">Get Result</button>
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#check_Palindrome_show">
        Show Code
      </button>
						<p id="result_check_Palindrome"></p>
					</div>

					<p>_________________________________________</p>
					<!-- JavaScript: Find a perfect number -->
					<div class="function1">
						<p>JavaScript: Find a perfect number :</p>
						<form class="form1" action="index.html" method="post">
							Enter a Number : <input type="number" id="number_is_perfect">
						</form>
						<button type="button" class="btn btn-primary" name="button" onclick="is_perfect()">Get Result</button>
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_perfect_show">
        Show Code
      </button>
						<p id="result_is_perfect"></p>
					</div>

					<p>_________________________________________</p>
					<!-- JavaScript: Extract unique characters from a string -->
					<div class="function1">
						<p>JavaScript: Extract unique characters from a string :</p>
						<form class="form1" action="index.html" method="post">
							Enter some Letters : <input type="text" id="letters_unique_char" size="80">
						</form>
						<button type="button" class="btn btn-primary" name="button" onclick="unique_char()">Get Result</button>
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#letters_unique_char_show">
        Show Code
      </button>
						<p id="result_unique_char"></p>
					</div>

					<p>_________________________________________</p>
					<!-- JavaScript: Generates a string id (specified length) of random characters -->
					<div class="function1">
						<p>JavaScript: Generates a string id (specified length) of random characters :</p>
						<form class="form1" action="index.html" method="post">
							Enter a Number : <input type="number" id="number_makeid">
						</form>
						<button type="button" class="btn btn-primary" name="button" onclick="makeid()">Get Result</button>
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#number_makeid_show">
        Show Code
      </button>
						<p id="result_makedir"></p>
					</div>

					<p>_________________________________________</p>
					<!-- JavaScript: Letter count within a string -->
					<div class="function1">
						<p>JavaScript: Letter count within a string :</p>
						<form class="form1" action="index.html" method="post">
							Enter a Word/Sentence : <input type="text" id="word_char_count"><br> Enter a Letter : <input type="text" id="letter_char_count">
						</form>
						<button type="button" class="btn btn-primary" name="button" onclick="char_count()">Get Result</button>
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#letter_char_count_show">
        Show Code
      </button>
						<p id="result_char_count"></p>
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

	<script src="/JS_Functions/JavaScript_Functions_console.js">


	</script>
	<script src="/JS_Functions/JavaScript_Functions.js">


	</script>
</body>

</html>
