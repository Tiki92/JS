<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript Drawing</title>
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
<body onload="animate_string('target'), draw(), draw1(), draw2(), draw3(), draw4(), draw5()">

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
    include('Modal_JavaScript_Drawing.html');
     ?>

    <div class="col-sm-5">
      <h2>JavaScript Drawing : 6 Exercises</h2>

      <div class="main">
        <!-- Draw a rectangular shape -->
        <div class="function1" >
          <body onload="draw();">
            <p>Draw a rectangular shape :</p>
            <canvas id="canvas" width="150" height="150"></canvas>
          </body>
        </div>

        <!-- Draw a circle -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Draw a circle :</p>
          <canvas id="circle" width="150" height="150"></canvas>
        </div>

        <!-- Draw two intersecting rectangles, one of which has alpha transparency -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Draw two intersecting rectangles, one of which has alpha transparency :</p>
          <canvas id="canvas1" width="150" height="150"></canvas>
        </div>

        <!-- Draw a right-angled triangle -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Draw a right-angled triangle :</p>
          <canvas id="canvas2" width="150" height="150"></canvas>
        </div>

        <!-- Draw a diagram using moveto() function -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Draw a diagram using moveto() function :</p>
          <canvas id="canvas3" width="250" height="250"></canvas>
        </div>

        <!-- Draw a diagram with diagonal, white to black circles -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Draw a diagram with diagonal, white to black circles :</p>
          <canvas id="myCanvas" width="1500" height="800"></canvas>
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
  <script src="JavaScript_Drawing.js"></script>
  </body>
  </html>
