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
    include('Modal_JavaScript_DOM.html');
    ?>

    <div class="col-sm-5">
      <h2>JavaScript DOM : 13 Exercises</h2>

      <div class="main">
        <!-- Modify paragraph text style through javascript code using button -->
        <div class="function1">
          <p id ='text'>Modify paragraph text style through javascript code using button :</p>
          <div>
            <button id="style1" class="btn btn-primary"
            onclick="js_style()">Style</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#js_style_show">
          Show Code
        </button>
          </div>
        </div>

        <!-- Store and display the values of text boxes of a form -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Store and display the values of text boxes of a form :</p>
          <form id="form1" onsubmit="getFormvalue()">
            First name: <input type="text" name="fname" value="David" title="Text1"><br>
            Last name: <input type="text" name="lname" value="Beckham" title="Text"><br>
            <input type="button" class="btn btn-primary" class="btn btn-primary" onclick="getFormvalue()" value="Submit">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#getFormvalue_show">
          Show Code
        </button>
          </form>
            <p id="result_getFormvalue"></p>
        </div>

        <!-- Set the background color of a paragraph -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Set the background color of a paragraph :</p>
          <input type="button" class="btn btn-primary" value="Click to set paragraph background color" onclick="set_background()">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#set_background_show">
        Show Code
      </button>
          <p>w3resource JavaScript Exercises</p>
          <p>w3resource PHP Exercises</p>
        </div>

        <!-- Collect the value of href, hreflang, rel, target, and type attributes of a link -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Collect the value of href, hreflang, rel, target, and type attributes of a link :</p>
          <p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://www.w3resource.com/">w3resource</a></p>
          <button class="btn btn-primary" onclick="getAttributes()">Click here to get the attribute's value</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#getAttributes_show">
        Show Code
      </button>
        </div>

        <!-- JavaScript function to add rows to a table -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>JavaScript function to add rows to a table :</p>
          <table id="sampleTable" border="1">
            <tr><td>Row1 cell1</td>
              <td>Row1 cell2</td></tr>
              <tr><td>Row2 cell1</td>
                <td>Row2 cell2</td></tr>
              </table><br>
              <input type="button" class="btn btn-primary" onclick="insert_Row()" value="Insert row">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#insert_Row_show">
            Show Code
          </button>
            </div>

        <!-- Create a function to update the content of a specific cell of a table -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Create a function to update the content of a specific cell of a table :</p>
          <table id="myTable" border="1">
            <tr><td>Row1 cell1</td>
              <td>Row1 cell2</td></tr>
              <tr><td>Row2 cell1</td>
                <td>Row2 cell2</td></tr>
                <tr><td>Row3 cell1</td>
                  <td>Row3 cell2</td></tr>
                </table><form>
                  <input type="button" class="btn btn-primary" onclick="changeContent()" value="Change content">
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#changeContent_show">
                Show Code
              </button>
        </form>
        </div>

        <!-- Create a user defined table, accepting rows and columns -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Create a user defined table, accepting rows and columns :</p>
          <table id="myTable1" border="1">
          </table><form>
            <input type="button" class="btn btn-primary" onclick="createTable()" value="Create the table">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createTable_show">
          Show Code
        </button>
        </form>
          </div>

        <!-- Remove items from a dropdown list -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Remove items from a dropdown list :</p>
          <form>
            <select title="This_Text" id="colorSelect">
              <option>Red</option>
              <option>Green</option>
              <option>White</option>
              <option>Black</option>
            </select>
            <input type="button" class="btn btn-primary" onclick="removecolor()" value="Select and Remove" title="Button1">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#removecolor_show">
          Show Code
        </button>
          </form>
        </div>

        <!-- Count and display the items of a dropdown list, in an alert window -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Count and display the items of a dropdown list, in an alert window :</p>
            <form>
          <input type="button" class="btn btn-primary" value="Calculate" id="submit1" onclick="getOptions()">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#getOptions_show">
        Show Code
      </button> </form>
        </div>

        <!-- Calculate the volume of a sphere -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate the volume of a sphere :</p>
          <p>Input radius value and get the volume of a sphere.</p>
          <form action="" method="post" id="MyForm">
            <label for="radius">Radius</label><input type="text" name="radius" id="radius" required>
            <label for="volume">Volume</label><input type="text" name="volume" id="volume">
            <input type="submit" class="btn btn-primary" value="Calculate" id="submit">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#volume_sphere_show">
          Show Code
        </button>    </form>
          </div>

        <!-- Display a random image by clicking on a button -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Display a random image by clicking on a button :</p>
          <button id="jsstyle" class="btn btn-primary"
          onclick="display_random_image();">Show Image</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#display_random_image_show">
        Show Code
      </button>
        </div>

        <!-- Highlight the bold words of a paragraph, on mouse over a certain link -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Highlight the bold words of a paragraph, on mouse over a certain link :</p>
          <p>[<a href="#" onMouseOver="highlight()" onMouseOut="return_normal()">On mouse over here bold words of the following paragraph will be highlighted</a>]</p>
          <p><strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to intermediate) who <strong>want</strong> to work with
            <strong>various</strong> JavaScript <strong>problems</strong> and write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
          </div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#getBold_items_show">
        Show Code
      </button>
      
        <!-- Get the width and height of a window online -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the width and height of a window online :</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#getSize_show">
        Show Code
      </button>
          <div id="wh">
            <!-- Place height and width size here! -->

          </div>
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
  <script src = "JavaScript_DOM.js"></script>
  </body>
  </html>
