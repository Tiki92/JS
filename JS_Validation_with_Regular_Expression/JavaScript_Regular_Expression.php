<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript Regular Expression</title>
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
    include('Modal_JavaScript_Regular_Expression.html');
     ?>

    <div class="col-sm-5">
      <h2>JavaScript Validation with Regular Expression : 20 Exercises</h2>

      <div class="main">
        <!-- Check whether the first character of a string is uppercase or not -->
        <div class="function1">
          <p>Check whether the first character of a string is uppercase or not :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Word : <input type="text" id="word_upper_case">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="upper_case()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#upper_case_show">
        Show Code
      </button>
          <p id="result_upper_case"></p>
        </div>

        <!-- Check whether a credit card number format is like 9999-9999-9999-9999 -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a credit card number format is like 9999-9999-9999-9999 :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Card Number : <input type="text" id="card_is_creditCard">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="is_creditCard()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_creditCard_show">
        Show Code
      </button>
          <p id="result_is_creditCard"></p>
        </div>

        <!-- Check whether the pattern of an e-mail address matches a specific format -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether the pattern of an e-mail address matches a specific format :</p>
          <form class="form1" action="index.html" method="post">
            Enter an e-mail addres : <input type="text" id="email_valid_email">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="valid_email()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#valid_email_show">
        Show Code
      </button>
          <p id="result_valid_email"></p>
        </div>

        <!-- Search a date within a string -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Search a date within a string :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Date : <input type="text" id="date_is_dateString">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="is_dateString()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_dateString_show">
        Show Code
      </button>
          <p id="result_is_dateString"></p>
        </div>

        <!-- Alternet of trim function using regular expression -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Alternet of trim function using regular expression :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Word : <input type="text" id="word_Trim">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="Trim()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Trim_show">
        Show Code
      </button>
          <p id="result_Trim"></p>
        </div>

        <!-- Count number of words in string -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Count number of words in string :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Sentence : <input type="text" id="sentence_count_words">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="count_words()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#count_words_show">
        Show Code
      </button>
          <p id="result_count_words"></p>
        </div>

        <!-- Check whether a given value is IP value or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a given value is IP value or not :</p>
          <form class="form1" action="index.html" method="post">
            Enter an IP : <input type="text" id="IP_is_IP">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="is_IP()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_IP_show">
        Show Code
      </button>
          <p id="result_is_IP"></p>
        </div>

        <!-- Count the number of vowels in a given string -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Count the number of vowels in a given string :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Sentence : <input type="text" id="sentence_vowel_count">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="vowel_count()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#vowel_count_show">
        Show Code
      </button>
          <p id="result_vowel_count"></p>
        </div>

        <!-- Check whether a given value is an valid url or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a given value is an valid url or not :</p>
          <form class="form1" action="index.html" method="post">
            Enter an URL : <input type="text" id="url_is_url">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="is_url()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_url_show">
        Show Code
      </button>
          <p id="result_is_url"></p>
        </div>

        <!-- Check whether a given value is alpha numeric or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a given value is alpha numeric or not :</p>
          <form class="form1" action="index.html" method="post">
            Enter Somethning : <input type="text" id="something_is_alphaNumeric">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="is_alphaNumeric()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_alphaNumeric_show">
        Show Code
      </button>
          <p id="result_is_alphaNumeric"></p>
        </div>

        <!-- Check whether a given value is time string or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a given value is time string or not :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Time : <input type="text" id="time_is_timeString">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="is_timeString()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_timeString_show">
        Show Code
      </button>
          <p id="result_is_timeString"></p>
        </div>

        <!-- Check whether a given value is US zip code or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a given value is US zip code or not :</p>
          <form class="form1" action="index.html" method="post">
            Enter a ZipCode : <input type="text" id="zip_is_usZipCode">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="is_usZipCode()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_usZipCode_show">
        Show Code
      </button>
          <p id="result_is_usZipCode"></p>
        </div>

        <!-- Check whether a given value is UK Post Code or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a given value is UK Post Code or not :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Zip Code : <input type="text" id="zip_is_ukPostCode">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="is_ukPostCode()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_ukPostCode_show">
        Show Code
      </button>
          <p id="result_is_ukPostCode"></p>
        </div>

        <!-- Check whether a given value is Canada Post Code or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a given value is Canada Post Code or not :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Zip Code : <input type="text" id="zip_is_caPostalCode">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="is_caPostalCode()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_caPostalCode_show">
        Show Code
      </button>
          <p id="result_is_caPostalCode"></p>
        </div>

        <!-- Check whether a given value is a social security number or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a given value is a social security number or not  :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Social Security Code : <input type="text" id="SC_is_social_SC">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="is_social_SC()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_social_SC_show">
        Show Code
      </button>
          <p id="result_is_social_SC"></p>
        </div>

        <!-- Check whether a given value is hexadecimal value or not -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a given value is hexadecimal value or not :</p>
          <div class="function1">
            <form class="form1" action="index.html" method="post">
              Enter a Hexadecimal Value : <input type="text" id="str_is_hexadecimal">
            </form>
            <button type="button" class="btn btn-primary" name="button" onclick="is_hexadecimal()">Get Result</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_hexadecimal_show">
          Show Code
        </button>
            <p id="result_is_hexidecimal"></p>
          </div>
        </div>

          <!-- Check whether a given value is hexcolor value or not -->
          <p>_________________________________________</p>
          <div class="function1">
            <p>Check whether a given value is hexcolor value or not :</p>
            <form class="form1" action="index.html" method="post">
              Enter a Hex Color : <input type="text" id="str_is_hexcolor">
            </form>
            <button type="button" class="btn btn-primary" name="button" onclick="is_hexcolor()">Get Result</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_hexcolor_show">
          Show Code
        </button>
            <p id="result_is_hexcolor"></p>
          </div>

          <!-- Check whether a given value represents a domain or not -->
          <p>_________________________________________</p>
          <div class="function1">
            <p>Check whether a given value represents a domain or not :</p>
            <form class="form1" action="index.html" method="post">
              Enter a Domain : <input type="text" id="str_is_domain">
            </form>
            <button type="button" class="btn btn-primary" name="button" onclick="is_domain()">Get Result</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_domain_show">
          Show Code
        </button>
            <p id="result_is_domain"></p>
          </div>

          <!-- Check whether a given value is html or not -->
          <p>_________________________________________</p>
          <div class="function1">
            <p>Check whether a given value is html or not :</p>
            <form class="form1" action="index.html" method="post">
              Enter a a HTML Value : <input type="text" id="str_is_html">
            </form>
            <button type="button" class="btn btn-primary" name="button" onclick="is_html()">Get Result</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_html_show">
          Show Code
        </button>
            <p id="result_is_html"></p>
          </div>

          <!-- Check a given value contains alpha, dash and underscore -->
          <p>_________________________________________</p>
          <div class="function1">
            <p>Check a given value contains alpha, dash and underscore :</p>
            <form class="form1" action="index.html" method="post">
              Enter Something : <input type="text" id="something_is_alphaDash">
            </form>
            <button type="button" class="btn btn-primary" name="button" onclick="is_alphaDash()">Get Result</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_alphaDash_show">
          Show Code
        </button>
            <p id="result_is_alphaDash"></p>
          </div>

          <!-- Print an integer with commas as thousands separators -->
          <p>_________________________________________</p>
          <div class="function1">
            <p>Print an integer with commas as thousands separators :</p>
            <form class="form1" action="index.html" method="post">
              Enter a Number : <input type="text" id="num_thousands_separators">
            </form>
            <button type="button" class="btn btn-primary" name="button" onclick="thousands_separators()">Get Result</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#thousands_separators_show">
          Show Code
        </button>
            <p id="result_thousands_separators"></p>

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
  <script src="JavaScript_Regular_Expression.js"></script>
  </body>
  </html>
