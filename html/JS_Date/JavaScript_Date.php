<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript Date</title>
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
    include('Modal_JavaScript_Date.html');
     ?>

    <div class="col-sm-5">
      <h2>JavaScript Date : 53 Exercises</h2>

      <div class="main">

        <!-- Check whether an input is a date object or not -->
        <div class="function1">
        <p>Check whether an input is a date object or not</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_date_show">
      Show Code
    </button>
        </div>

        <!-- Get the current date -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the current date :</p>
          <button type="button" class="btn btn-primary" name="button" onclick="curDay()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#curDay_show">
        Show Code
      </button>
      <p id="result_curDay"></p>
        </div>

        <!-- Get the number of days in a month -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the number of days in a month :</p>
          <form class="form1" action="index.html" method="post">
            Enter the Month : <input type="number" id="month_getDaysInMonth"><br>
            Enter the Year : <input type="number" id="year_getDaysInMonth">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="getDaysInMonth()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#getDaysInMonth_show">
        Show Code
      </button>
          <p id="result_getDaysInMonth"></p>
        </div>

        <!-- Get the month name from a particular date -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the month name from a particular date :</p>
          <form class="form1" action="index.html" method="post">
          Date : 10/11/2009.
          </form>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" name="button" onclick="getName()">Get the Month Name</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#getName_show">
        Show Code
      </button>

        </div>

        <!-- Comparison between two dates -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Comparison between two dates :</p>
          <form class="form1" action="index.html" method="post">
            Enter first Date : <input type="date" id="date1_compare_date"><br>
            Enter second Date : <input type="date" id="date2_compare_date">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="compare_dates()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#compare_dates_show">
        Show Code
      </button>
          <p id="result_compare_date"></p>
        </div>

        <!-- Add minutes to a Date object -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Add minutes to a Date object :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add_minutes_show">
        Show Code
      </button>
        </div>

        <!-- Check whether a date is a weekend date -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Check whether a date is a weekend date :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#is_weekend_show">
        Show Code
      </button>
        </div>

        <!-- Difference between two dates in days -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Difference between two dates in days :</p>
          <form class="form1" action="index.html" method="post">
            Enter first date : <input type="date" id="date1_date_diff_indays"><br>
            Enter second date : <input type="date" id="date2_date_diff_indays">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="date_diff_indays()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#date_diff_indays_show">
        Show Code
      </button>
          <p id="result_date_diff_indays"></p>
        </div>

        <!-- Find out the last day of a month -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Find out the last day of a month :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#lastday_show">
        Show Code
      </button>
        </div>

        <!-- Find out which day was in yesterday -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Find out which day was in yesterday :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#yesterday_show">
        Show Code
      </button>
        </div>

        <!-- Maximum date from an array of dates -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Maximum date from an array of dates :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#max_date_show">
        Show Code
      </button>
        </div>

        <!-- Minimum date from an array of dates -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Minimum date from an array of dates :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#min_date_show">
        Show Code
      </button>
        </div>

        <!-- Return the number of minutes in hours and minutes -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Return the number of minutes in hours and minutes :</p>
          <form class="form1" action="index.html" method="post">
            Enter the number of Minutes : <input type="number" id="minutes_timeConvert">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="timeConvert()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#timeConvert_show">
        Show Code
      </button>
          <p id="result_timeConvert"></p>
        </div>

        <!-- Get the amount of days of a year -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the amount of days of a year :</p>
          <form class="form1" action="index.html" method="post">
            Enter a Year : <input type="number" id="year_days_of_a_year">
          </form>
          <button type="button" class="btn btn-primary" name="button" onclick="days_of_a_year()">Get Result</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#days_of_a_year_show">
        Show Code
      </button>
          <p id="result_days_of_a_year"></p>
        </div>

        <!-- Get the quarter of the year -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the quarter of the year :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#quarter_of_the_year_show">
        Show Code
      </button>
        </div>

        <!-- Count the number of days passed since beginning of the year -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Count the number of days passed since beginning of the year :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#days_passed_show">
        Show Code
      </button>
        </div>

        <!-- Convert a Unix timestamp to time -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Convert a Unix timestamp to time :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Unix_timestamp_show">
        Show Code
      </button>
        </div>

        <!-- Calculate age -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Calculate age :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#calculate_age_show">
        Show Code
      </button>
        </div>

        <!-- Get the day of the month, 2 digits with leading zeros -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the day of the month, 2 digits with leading zeros :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#day_of_the_month_show">
        Show Code
      </button>
        </div>


        <!-- Get a textual representation of a day -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get a textual representation of a day :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#short_Days_show">
        Show Code
      </button>
        </div>

        <!-- Get a full textual representation of the day of the week -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get a full textual representation of the day of the week :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#long_Days_show">
        Show Code
      </button>
        </div>

        <!-- Get ISO-8601 numeric representation of the day of the week -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get ISO-8601 numeric representation of the day of the week :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ISO_numeric_date_show">
        Show Code
      </button>
        </div>

        <!-- Get English ordinal suffix for the day of the month -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get English ordinal suffix for the day of the month :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#english_ordinal_suffix_show">
        Show Code
      </button>
        </div>

        <!-- Get ISO-8601 week number of year, weeks starting on Monday -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get ISO-8601 week number of year, weeks starting on Monday :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ISO8601_week_no_show">
        Show Code
      </button>
        </div>

        <!-- Get a full textual representation of a month -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get a full textual representation of a month :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#full_month_show">
        Show Code
      </button>
        </div>

        <!-- Get a numeric representation of a month -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get a numeric representation of a month :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#numeric_month_show">
        Show Code
      </button>
        </div>

        <!-- Get a short textual representation of a month -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get a short textual representation of a month :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#short_months_show">
        Show Code
      </button>
        </div>

        <!--  Get a full numeric representation of a year -->
        <p>_________________________________________</p>
        <div class="function1">
          <p> Get a full numeric representation of a year :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#full_year_show">
        Show Code
      </button>
        </div>

        <!-- Get a two digit representation of a year -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get a two digit representation of a year :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sort_year_show">
        Show Code
      </button>
        </div>

        <!-- Get lowercase Ante meridiem and Post meridiem -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get lowercase Ante meridiem and Post meridiem :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#lower_am_pm_show">
        Show Code
      </button>
        </div>

        <!-- Get uppercase Ante meridiem and Post meridiem -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get uppercase Ante meridiem and Post meridiem :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#upper_am_pm_show">
        Show Code
      </button>
        </div>

        <!-- swatch Internet time -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Swatch Internet time :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#internet_time_show">
        Show Code
      </button>
        </div>

        <!-- Get 12-hour format of an hour with leading zeros -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get 12-hour format of an hour with leading zeros :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#hours_with_zeroes_show">
        Show Code
      </button>
        </div>

        <!-- Get 24-hour format of an hour without leading zeros -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get 24-hour format of an hour without leading zeros :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#hours_without_zeroes_show">
        Show Code
      </button>
        </div>

        <!-- Get minutes with leading zeros -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get minutes with leading zeros :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#minutes_with_leading_zeros_show">
        Show Code
      </button>
        </div>

        <!-- Get seconds with leading zeros -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get seconds with leading zeros :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#seconds_with_leading_zeros_show">
        Show Code
      </button>
        </div>

        <!-- Get Timezone -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get Timezone :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#get_Timezone_show">
        Show Code
      </button>
        </div>

        <!-- Find whether or not the date is in daylights savings time -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Find whether or not the date is in daylights savings time :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#daylights_savings_show">
        Show Code
      </button>
        </div>

        <!-- Get difference to Greenwich time in hours -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get difference to Greenwich time in hours :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#diff_to_GMT_show">
        Show Code
      </button>
        </div>

        <!-- Get timezone offset in seconds -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get timezone offset in seconds :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#timezone_offset_in_seconds_show">
        Show Code
      </button>
        </div>

        <!-- Add specified years to a date -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Add specified years to a date :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add_years_show">
        Show Code
      </button>
        </div>

        <!-- Add specified weeks to a date -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Add specified weeks to a date :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add_weeks_show">
        Show Code
      </button>
        </div>

        <!-- Add specified months to a date -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Add specified months to a date :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add_months_show">
        Show Code
      </button>
        </div>

        <!-- Get time differences in minutes between two dates -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get time differences in minutes between two dates :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#diff_minutes_show">
        Show Code
      </button>
        </div>

        <!-- Get time differences in hours between two dates -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get time differences in hours between two dates :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#diff_hours_show">
        Show Code
      </button>
        </div>

        <!-- Get time differences in days between two dates -->
        <p>_________________________________________</p>
        <div class="function1">
        <p>Get time differences in days between two dates :</p>
        <p>(The result can be found in the Console)</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#diff_days_show">
      Show Code
    </button>
        </div>

        <!-- Get time differences in weeks between two dates -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get time differences in weeks between two dates :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#diff_weeks_show">
        Show Code
      </button>
        </div>

        <!-- Get time differences in months between two dates -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get time differences in months between two dates :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#diff_months_show">
        Show Code
      </button>
        </div>

        <!-- Get time differences in years between two dates -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get time differences in years between two dates :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#diff_years_show">
        Show Code
      </button>
        </div>

        <!-- Get the week start date -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the week start date :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#startOfWeek_show">
        Show Code
      </button>
        </div>

        <!-- Get the week end date -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the week end date :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#endOfWeek_show">
        Show Code
      </button>
        </div>

        <!-- Get the month start date -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the month start date :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#startOfMonth_show">
        Show Code
      </button>
        </div>

        <!-- Get the month end date -->
        <p>_________________________________________</p>
        <div class="function1">
          <p>Get the month end date :</p>
          <p>(The result can be found in the Console)</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#endOfMonth_show">
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
  <script src="JavaScript_Date.js"></script>
  </body>
  </html>
