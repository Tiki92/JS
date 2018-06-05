<!DOCTYPE html>
<html lang="en">

<head>
	<title>JavaScript Recursion</title>
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
    include('Modal_Recursion.html');
     ?>

				<div class="col-sm-5">
					<h2>JavaScript Recursion : 9 Exercises</h2>

					<div class="main">

						<!-- JavaScript: Find the greatest common divisor of two positive numbers -->
						<div class="function1">
							<form class="form1" action="index.html" method="post">
								Enter the First Number : <input type="number" id="first_greatestDivider"><br> Enter the Second Number : <input type="number" id="second_greatestDivider">
							</form>
							<button type="button" class="btn btn-primary" name="button" onclick="greatestDivider()"> Get Result</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#second_greatestDivider_show">
      Show Code
    </button>
							<p id="result_greatestDivider"></p>
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
		<script src="/JS_Functions/JavaScript_Functions.js">


		</script>
		<script type="text/javascript" src="JavaScript_Recursion.js"></script>
		<script src="JavaScript_Recursion_Console.js">


		</script>
</body>

</html>
