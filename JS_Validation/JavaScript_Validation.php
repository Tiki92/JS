<!DOCTYPE html>
<html lang="en">

<head>
	<title>JavaScript Validation</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/Style/Basic_style.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
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
    include('Modal_JavaScript_Validation.html');
     ?>

				<div class="col-sm-5">
					<h2>JavaScript Validation : 10 Exercises</h2>

					<div class="main">
						<!-- Validate whether a given value type is Boolean or not -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Validate whether a given value type is Boolean or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_boolean_show">
        Show Code
      </button>
						</div>

						<!-- Validate whether a given value type is error or not -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Validate whether a given value type is error or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_nan_show">
        Show Code
      </button>
						</div>

						<!-- Validate whether a given value type is NaN or not -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Validate whether a given value type is NaN or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_nan1_show">
        Show Code
      </button>
						</div>

						<!-- Validate whether a given value type is null or not -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Validate whether a given value type is null or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_null_show">
        Show Code
      </button>
						</div>

						<!-- Validate whether a given value is number or not -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Validate whether a given value is number or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_number_show">
        Show Code
      </button>
						</div>

						<!-- Validate whether a given value type is pure json object or not -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Validate whether a given value type is pure json object or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_json_show">
          Show Code
        </button>
						</div>

						<!-- Validate whether a given value RegExp or not -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Validate whether a given value RegExp or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_regexp_show">
          Show Code
        </button>
						</div>

						<!-- Validate whether a given value type is char or not -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Validate whether a given value type is char or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_char_show">
          Show Code
        </button>
						</div>

						<!-- Check whether given value types are same or not -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Check whether given value types are same or not :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_sameType_show">
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
include('../Footer.html');
?>

	<script src="/JS_Functions/JavaScript_Functions.js">
	</script>
	<script src="JavaScript_Validation.js"></script>
</body>

</html>