<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript Array</title>
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
    include('Modal_JavaScript_Array.html');
     ?>

    <div class="col-sm-5">
      <h2>JavaScript Array : 42 Exercises</h2>
      <div class="main">

      <!-- Insert dashes (-) between each two even digits of a specific number -->
      <p>_________________________________________</p>
      <div class="function1">
      <p>Insert dashes (-) between each two even digits of a specific number</p>
      <p>The result can be seen in the console :</p>
      <button type="button" class="btn btn-primary" name="button" onclick="separateNums()">Get Result</button>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#separateNums_show">
    Show Code
  </button>
      </div>

      <!-- Sort the items of an array -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Sort the items of an array :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" name="button" onclick="sort([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ])">Get Result</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sort_show">
      Show Code
    </button>
      </div>

      <!-- Find the most frequent item of an array -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Find the most frequent item of an array :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" name="button" onclick="mostFreq()">Get Result</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mostFreq_show">
      Show Code
    </button>
      </div>

      <!-- Swap the case of each character of a string, upper case to lower and vice versa -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Swap the case of each character of a string, upper case to lower and vice versa :</p>
        <form class="form1" action="index.html" method="post">
          Enter a Sentance : <input type="text" id="str_swapCase" size="80">
        </form>
        <button type="button" class="btn btn-primary" name="button" onclick="swapCase()">Get Result</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#swapCase_show">
      Show Code
    </button>
        <p id="result_swapCase"></p>
      </div>

      <!-- Print the elements of an array-->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Print the elements of an array :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" name="button" onclick="printArr()">Get Result</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#printArr_show">
      Show Code
    </button>
      </div>

      <!-- Find the sum of squares of a numeric vector -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Find the sum of squares of a numeric vector :</p>
        <button type="button" class="btn btn-primary" name="button" onclick="sum_sq([0, 1, 2, 3, 4])">Get Result</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sum_sq_show">
      Show Code
    </button>
        <p id="result_sum_sq"></p>
      </div>

      <!-- Compute the sum and product of an array of integers -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Compute the sum and product of an array of integers :</p>
        <button type="button" class="btn btn-primary" name="button" onclick="sum_product()">Get Result</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sum_product_show">
      Show Code
    </button>
        <p id="result_sum_product"></p>
      </div>

      <!-- Add items in a blank array and display the items -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Add items in a blank array and display the items :</p>
        <input type="text" id="text_addItems">
        <input type="button" class="btn btn-primary" id="button1" value="Add" onclick="add_element_to_array();"></input>
        <input type="button" class="btn btn-primary" id="button2" value="Display" onclick="display_array();"></input>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add_element_to_array_show">
      Show Code
    </button>
        <div id="Result_addItems"></div>
      </div>

      <!-- Remove duplicate items from an array, ignore case sensitivity -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Remove duplicate items from an array, ignore case sensitivity :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#removeDuplicates_show">
      Show Code
    </button>
      </div>

      <!-- Display the colors entered in an array by a specific format -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Display the colors entered in an array by a specific format :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Ordinal_show">
      Show Code
    </button>
      </div>

      <!-- Randomly arrange or shuffle an array -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Randomly arrange or shuffle an array :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#shuffle_show">
      Show Code
    </button>
      </div>

      <!-- Perform a binary search within an array -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Perform a binary search within an array :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#binary_Search_show">
      Show Code
    </button>
      </div>

      <!--  Compute the sum of each individual index value of two or more arrays -->
      <p>_________________________________________</p>
      <div class="function1">
        <p> Compute the sum of each individual index value of two or more arrays :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Arrays_sum_show">
      Show Code
    </button>
      </div>

      <!-- Find duplicate values in a array -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Find duplicate values in a array :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#find_duplicate_in_array_show">
      Show Code
    </button>
      </div>

      <!-- Flatten a nested array -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Flatten a nested array :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#flatten_show">
      Show Code
    </button>
      </div>

      <!-- Compute the union of two arrays -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Compute the union of two arrays :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#union_show">
      Show Code
    </button>
      </div>

      <!-- Find the difference of two arrays -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Find the difference of two arrays :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#differenceOf2Arrays_show">
      Show Code
    </button>
      </div>

      <!-- Remove null, 0, blank, false, undefined and NaN values from an array -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Remove null, 0, blank, false, undefined and NaN values from an array :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#filter_array_show">
      Show Code
    </button>
      </div>

      <!-- Sort the specified array of objects by title value -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Sort the specified array of objects by title value :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#compare_to_sort_show">
      Show Code
    </button>
      </div>

      <!-- Find a pair of elements from an specified array whose sum equals a specific target number -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Find a pair of elements from an specified array whose sum equals a specific target number :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#twoSum_show">
      Show Code
    </button>
      </div>

      <!-- Retrieve the value of a specified property from all elements in an array -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Retrieve the value of a specified property from all elements in an array :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#property_value_show">
      Show Code
    </button>
      </div>

      <!-- Find the longest common starting substring in a set of strings -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Find the longest common starting substring in a set of strings :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#longest_common_starting_substring_show">
      Show Code
    </button>
      </div>

      <!-- Fill an array with values on supplied bounds -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Fill an array with values on supplied bounds :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#num_string_range_show">
      Show Code
    </button>
      </div>

      <!-- Merge two arrays and removes all duplicates elements -->
      <p>_________________________________________</p>
      <div class="function1">
        <p>Merge two arrays and removes all duplicates elements :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#merge_array_show">
      Show Code
    </button>
      </div>

        <!-- Remove a specific element from an array -->
      <p>_________________________________________</p>
        <div class="function1">
          <p>Remove a specific element from an array :</p>
          <button type="button" class="btn btn-primary" name="button" onclick="remove_array_element([2, 5, 9, 6], 5)">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#remove_array_element_show">
        Show Code
      </button>
          <p id="result_remove_array_element"></p>
        </div>

        <!-- Find to if an array contains a specific element -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Find to if an array contains a specific element :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#contains_show">
        Show Code
      </button>
        </div>

        <!-- Get nth largest element from an unsorted array -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get nth largest element from an unsorted array :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#nthlargest_show">
        Show Code
      </button>
        </div>

        <!-- Get a random item from an array -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get a random item from an array :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#random_item_show">
        Show Code
      </button>
        </div>

        <!-- Create a specified number of elements and pre-filled numeric value array -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Create a specified number of elements and pre-filled numeric value array :</p>
          <form class="form1" action="index.html" method="post">
            Enter Number 1: <input type="number" id="number_array_filled"><br>
            Enter Number 2: <input type="number" id="number2_array_filled">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="array_filled()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#array_filled_show">
        Show Code
      </button>
          <p id="result_array_filled"></p>
        </div>

        <!-- Move an array element from one position to another -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Move an array element from one position to another :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#move_show">
        Show Code
      </button>
        </div>

        <!-- Filter false, null, 0 and blank values from an array -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Filter false, null, 0 and blank values from an array :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#filter_array_values_show">
        Show Code
      </button>
        </div>

        <!-- Generate an array of specified length, the content of the array is integer numbers, increase by one from starting -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Generate an array of specified length, the content of the array is integer numbers, increase by one from starting :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#array_range_show">
        Show Code
      </button>
        </div>

        <!-- Generate an array between two integers of 1 step length -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Generate an array between two integers of 1 step length :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#rangeBetwee_show">
        Show Code
      </button>
        </div>

        <!--  Find the unique elements from two arrays -->
        <p>_________________________________________</p>
        <div class="function1">
          <p> Find the unique elements from two arrays :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#difference_show">
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

 <?php
	include("Footer.html");
?>

  <script src = "/JS_Functions/JavaScript_Functions.js"> </script>
  <script src="/JS_Functions/JavaScript_Functions.js"></script>
  <script src="JavaScript_Array_console.js"></script>
  </body>
  </html>
