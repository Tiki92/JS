<!DOCTYPE html>
<html lang="en">

<head>
	<title>JavaScript Searching and Sorting</title>
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
    include('Modal_JavaScript_Searching_Sorting.html');
     ?>

				<div class="col-sm-5">
					<h2>JavaScript Searching and Sorting : 14 Exercises</h2>

					<div class="main">
						<!-- Quick sort -->
						<div class="function1">
							<p>Quick sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#quick_Sort_show">
        Show Code
      </button>
						</div>

						<!-- Merge sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Merge sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#merge_sort_show">
        Show Code
      </button>
						</div>

						<!-- Heap sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Heap sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#heap_root_show">
        Show Code
      </button>
						</div>

						<!-- Insertion sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Insertion sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#insertion_Sort_show">
        Show Code
      </button>
						</div>

						<!-- Selection sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Selection sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Selection_Sort_show">
        Show Code
      </button>
						</div>

						<!-- Shell sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Shell sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#shellSort_show">
        Show Code
      </button>
						</div>

						<!-- Bubble sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Bubble sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#swap_show">
        Show Code
      </button>
						</div>

						<!-- Cocktail shaker sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Cocktail shaker sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Cocktail_sort_show">
        Show Code
      </button>
						</div>

						<!-- Comb sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Comb sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#combsort_show">
        Show Code
      </button>
						</div>

						<!-- Gnome sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Gnome sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#gnomeSort_show">
        Show Code
      </button>
						</div>

						<!-- Counting sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Counting sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#countingSort_show">
        Show Code
      </button>
						</div>

						<!-- Flash sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Flash sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#flash_sort_show">
        Show Code
      </button>
						</div>

						<!-- Pancake sort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Pancake sort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#pancake_sort_show">
        Show Code
      </button>
						</div>

						<!-- Bogosort -->
						<p>_________________________________________</p>
						<div class="function1">
							<p>Bogosort :</p>
							<p>(The result can be found in the Console)</p>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Bogosort_show">
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
	<script src="JavaScript_Searching_Sorting.js"></script>
</body>

</html>
