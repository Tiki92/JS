<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript Recursion</title>
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
    include('Modal_Recursion.html');
     ?>

    <div class="col-sm-5">
      <h2>JavaScript Recursion : 9 Exercises</h2>

      <div class="main">

      <!-- JavaScript: Find the greatest common divisor of two positive numbers -->
      <div class="function1">
        <form class="form1" action="index.html" method="post">
          Enter the First Number : <input type="number" id="first_greatestDivider"><br>
          Enter the Second Number : <input type="number" id="second_greatestDivider">
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
  <script type="text/javascript" src="JavaScript_Recursion.js"></script>
  <script src = "JavaScript_Recursion_Console.js"> </script>
  </body>
  </html>
