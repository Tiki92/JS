<!DOCTYPE html>
<html lang="en">

<head>
	<title>JavaScript Object</title>
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
    include('Modal_JavaScript_Object.html');
     ?>

				<div class="col-sm-5">
					<h2>JavaScript Object : 18 Exercises</h2>

					<div class="main">
						<!-- List the properties of a JavaScript object -->
						<div class="function1">
							<p>List the properties of a JavaScript object :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#_keys_show">
        Show Code
      </button>
						</div>

						<!-- Delete a property from an object and print before or after deleting -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Delete a property from an object and print before or after deleting :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#del_student_show">
        Show Code
      </button>
						</div>

						<!-- Find the length of an object -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Find the length of an object :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#object_size_show">
        Show Code
      </button>
						</div>

						<!-- Gather and display infromation from an object -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Gather and display infromation from an object :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#gat_dis_show">
        Show Code
      </button>
						</div>

						<!-- Calculate the volume of a Cylinder -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Calculate the volume of a Cylinder :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Cylinder_show">
        Show Code
      </button>
						</div>

						<!-- Sort an array using Bubble Sorting method -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Sort an array using Bubble Sorting method :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#bubble_show">
        Show Code
      </button>
						</div>

						<!-- Returns a subset of a string -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Returns a subset of a string :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="subset_str_show">
        Show Code
      </button>
						</div>

						<!-- Create a clock and display the time in each second -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Create a clock and display the time in each second :</p>
							<button type="button" class="btn btn-primary" name="button" onclick="clock.run()">Get Time</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#my_Clock_show">
        Show Code
      </button>
							<div class="Clock" id="result_clock">
							</div>
						</div>

						<!-- Calculate the area and perimeter of a circle -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Calculate the area and perimeter of a circle :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#circle_show">
        Show Code
      </button>
						</div>

						<!-- Sort an array of JavaScript objects -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Sort an array of JavaScript objects :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sort_obj_show">
        Show Code
      </button>
						</div>

						<!-- Print all the methods in an JavaScript object -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Print all the methods in an JavaScript object :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#all_properties_show">
        Show Code
      </button>
						</div>

						<!-- Parse an URL -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Parse an URL :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#parse_URL_show">
        Show Code
      </button>
						</div>

						<!-- Retrieve all the names of object's own and inherited properties -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Retrieve all the names of object's own and inherited properties :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#allKeys_show">
        Show Code
      </button>
						</div>

						<!-- JavaScript: Retrieve all the values of an object's properties -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>JavaScript: Retrieve all the values of an object's properties :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#all_values_show">
        Show Code
      </button>
						</div>

						<!-- Convert an object into a list of pairs -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Convert an object into a list of pairs :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#key_value_pairs_show">
        Show Code
      </button>
						</div>

						<!-- Get a copy of the object where the keys have become the values and the values the keys -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Get a copy of the object where the keys have become the values and the values the keys :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#invert_key_value_show">
        Show Code
      </button>
						</div>

						<!-- Check if an object contains specified property -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Check if an object contains specified property :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#hasKey_show">
        Show Code
      </button>
						</div>

						<!-- Check whether a specified value is a DOM element -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Check whether a specified value is a DOM element :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_dom_element_show">
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
	include("../Footer.html");
	?>

	<script src="/JS_Functions/JavaScript_Functions.js">


	</script>
	<script src="JavaScript_Object.js"></script>
</body>

</html>
