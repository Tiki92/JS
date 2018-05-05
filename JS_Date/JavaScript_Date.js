// Show console.log in the HTML file
window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
console.log("JavaScript_Date :");
console.log("                      ");
// Check whether an input is a date object or not
var is_date = function(input) {
  if (Object.prototype.toString.call(input) === "[object Date]")
    return true;
    return false;
};
console.log("_________________________________________");
console.log("Check whether an input is a date object or not :");
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 0]));

// Get the current date
function curDay() {
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //As january is 0.
  var yyyy = today.getFullYear();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  document.getElementById("result_curDay").innerHTML = "The current date is : " + (mm + " / " + dd + " / " + yyyy);
}

// Get the number of days in a month
function getDaysInMonth() {
  var month = +document.getElementById("month_getDaysInMonth").value;
  var year = +document.getElementById("year_getDaysInMonth").value;
  document.getElementById("result_getDaysInMonth").innerHTML = "The result is : " + new Date(year,month, 0).getDate();
}

// Get the month name from a particular date
function month_name(dt) {
  console.log("Get the month name from a particular date :");
  var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return mlist[dt.getMonth()];

}
function getName() {
console.log(month_name(new Date("10/11.2009")));
}

// Comparison between two dates
function compare_dates() {
  var date1 = document.getElementById("date1_compare_date").value;
  var date2 = document.getElementById("date2_compare_date").value;

  if (date1 > date2)
  document.getElementById("result_compare_date").innerHTML = "The result is :" + ("Date1 > Date2");
  else if (date1 < date2)
  document.getElementById("result_compare_date").innerHTML = "The result is :" + ("Date2 > Date1");
  else
  document.getElementById("result_compare_date").innerHTML = "The result is :" + ("Date1 = Date2");
}

// Add minutes to a Date object
var add_minutes = function(dt, minutes) {
  return new Date(dt.getTime() + minutes * 60000);
}
console.log("_________________________________________");
console.log("Add minutes to a Date object :")
console.log(add_minutes(new Date(2014, 10, 2), 30).toString());

// Check whether a date is a weekend date
var is_weekend =  function(date1){
    var dt = new Date(date1);

    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        }
}
console.log("_________________________________________")
console.log("Check whether a date is a weekend date :");
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));

// Difference between two dates in days
function date_diff_indays() {
  var date1 = document.getElementById("date1_date_diff_indays").value;
  var date2 = document.getElementById("date2_date_diff_indays").value;

  dt1 = new Date(date1);
  dt2 = new Date(date2);

  document.getElementById("result_date_diff_indays").innerHTML = "The result is :" + Math.floor((Date.UTC(dt2.getFullYear(),
  dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24) / 30);
}

// Find out the last day of a month
var lastday = function(y, m) {
  return new Date(y, m + 1, 0).getDate();
}
console.log("_________________________________________");
console.log("Find out the last day of a month :");
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));

// Find out which day was in yesterday
var yesterday = function(date1) {
  var dt = new Date(date1);
  return new Date((dt.setDate(dt.getDate() - 1))).toString();
}
console.log("_________________________________________");
console.log("Find out which day was in yesterday :");
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));

// Maximum date from an array of dates
function max_date(all_dates) {
var max_dt = all_dates[0],
  max_dtObj = new Date(all_dates[0]);
all_dates.forEach(function(dt, index)
  {
  if ( new Date( dt ) > max_dtObj)
  {
  max_dt = dt;
  max_dtObj = new Date(dt);
  }
  });
 return max_dt;
  }
console.log("_________________________________________");
console.log("Maximum date from an array of dates :");
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// Minimum date from an array of dates
function min_date(all_dates) {
 var min_dt = all_dates[0],
  min_dtObj = new Date(all_dates[0]);
 all_dates.forEach(function(dt, index)
  {
  if ( new Date( dt ) < min_dtObj)
  {
  min_dt = dt;
  min_dtObj = new Date(dt);
  }
  });
 return min_dt;
  }
console.log("_________________________________________");
console.log("Minimum date from an array of dates :");
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// Return the number of minutes in hours and minutes
function timeConvert() {
  var n = +document.getElementById("minutes_timeConvert").value;
var num = n;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
document.getElementById("result_timeConvert").innerHTML = "The result is :"
+ num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}

// Get the amount of days of a year
function days_of_a_year() {
  var year = +document.getElementById("year_days_of_a_year").value;
if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
{
  document.getElementById("result_days_of_a_year").innerHTML = "The reusult is :" + "366";
} else {
  document.getElementById("result_days_of_a_year").innerHTML = "The reusult is :" + "365";
}
//  document.getElementById("result_days_of_a_year").innerHTML = "The result is : " + isLeapYear(year) ? 366 : 365;
//}
//function isLeapYear(year) {
//  document.getElementById("result_days_of_a_year").innerHTML = "The result is :" + year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

// Get the quarter of the year
function quarter_of_the_year(date) {
  var month = date.getMonth() + 1;
  return (Math.ceil(month / 3));
}
console.log("_________________________________________");
console.log("Get the quarter of the year :");
console.log(quarter_of_the_year(new Date()));
console.log(quarter_of_the_year(new Date(2015, 1, 21)));
console.log(quarter_of_the_year(new Date(2015, 10, 18)));

// Count the number of days passed since beginning of the year
function days_passed(dt) {
  var current = new Date(dt.getTime());
  var previous = new Date(dt.getFullYear(), 0, 1);

  return Math.ceil((current - previous + 1) / 86400000);
}
console.log("_________________________________________");
console.log("Count the number of days passed since beginning of the year :");
console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));

// Convert a Unix timestamp to time
function Unix_timestamp(t)
{
var dt = new Date(t*1000);
var hr = dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);
}
console.log("_________________________________________");
console.log("Convert a Unix timestamp to time :");
console.log(Unix_timestamp(1412743274));

// Calculate age
function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
console.log("_________________________________________");
console.log("Calculate age :");
console.log(calculate_age(new Date(1982, 11, 4)));
console.log(calculate_age(new Date(1962, 1, 1)));

// Get the day of the month, 2 digits with leading zeros
function day_of_the_month(d)
{
  return (d.getDate() < 10 ? '0' : '') + d.getDate();
}
console.log("_________________________________________");
console.log("Get the day of the month, 2 digits with leading zeros :");
d= new Date();
console.log(day_of_the_month(d));

d= new Date(2015, 10, 1);
console.log(day_of_the_month(d));

// Get a textual representation of a day
Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function short_Days(dt)
{
   return Date.shortDays[dt.getDay()];
}
console.log("_________________________________________");
console.log("Get a textual representation of a day :");
dt = new Date();
console.log(short_Days(dt));

dt = new Date(2015, 10, 1);
console.log(short_Days(dt));

// Get a full textual representation of the day of the week
Date.longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function long_Days(dt)
    {
      return Date.longDays[dt.getDay()];
    }
console.log("_________________________________________");
console.log("Get a full textual representation of the day of the week :")
dt = new Date();
console.log(long_Days(dt));

dt = new Date(2015, 10, 1);

console.log(long_Days(dt));

// Get ISO-8601 numeric representation of the day of the week
function ISO_numeric_date(dt)
{
  return (dt.getDay() === 0 ? 7 : dt.getDay());
}
console.log("_________________________________________");
console.log("Get ISO-8601 numeric representation of the day of the week :")
dt = new Date();
console.log(ISO_numeric_date(dt));

dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt));

// Get English ordinal suffix for the day of the month
function english_ordinal_suffix(dt)
  {
    return dt.getDate()+(dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th')));
  }
  console.log("_________________________________________");
  console.log("Get English ordinal suffix for the day of the month :")
dt = new Date();
console.log(english_ordinal_suffix(dt));

dt = new Date(2015, 10, 1);
console.log(english_ordinal_suffix(dt));

// Get ISO-8601 week number of year, weeks starting on Monday
function ISO8601_week_no(dt)
  {
     var tdt = new Date(dt.valueOf());
     var dayn = (dt.getDay() + 6) % 7;
     tdt.setDate(tdt.getDate() - dayn + 3);
     var firstThursday = tdt.valueOf();
     tdt.setMonth(0, 1);
     if (tdt.getDay() !== 4)
       {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
     return 1 + Math.ceil((firstThursday - tdt) / 604800000);
        }
console.log("_________________________________________");
console.log("Get ISO-8601 week number of year, weeks starting on Monday :")
dt = new Date();
console.log(ISO8601_week_no(dt));

dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt));

// Get a full textual representation of a month
Date.longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function full_month(dt)
  {
   return Date.longMonths[dt.getMonth()];
  }
  console.log("_________________________________________");
  console.log("Get a full textual representation of a month :");
dt = new Date();
console.log(full_month(dt));

dt = new Date(2015, 10, 1);
console.log(full_month(dt));

// Get a numeric representation of a month
function numeric_month(dt)
{
  return (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1);
}
console.log("_________________________________________");
console.log("Get a numeric representation of a month :");
dt = new Date();
console.log(numeric_month(dt));

dt = new Date(2015, 10, 1);
console.log(numeric_month(dt));

// Get a short textual representation of a month
Date.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function short_months(dt)
  {
    return Date.shortMonths[dt.getMonth()];
  }
console.log("_________________________________________");
console.log("Get a short textual representation of a month :");
dt = new Date();
console.log(short_months(dt));

dt = new Date(2015, 10, 1);
console.log(short_months(dt));

//  Get a full numeric representation of a year
function full_year(dt)
{
  return dt.getFullYear();
}
console.log("_________________________________________");
console.log("Get a full numeric representation of a year :");
dt = new Date();
console.log(full_year(dt));

dt = new Date(2015, 10, 1);
console.log(full_year(dt));

// Get a two digit representation of a year
function sort_year(dt)
{
  return ('' + dt.getFullYear()).substr(2);
}
console.log("_________________________________________");
console.log("Get a two digit representation of a year :");
dt = new Date();
console.log(sort_year(dt));

dt = new Date(1989, 10, 1);
console.log(sort_year(dt));

// Get lowercase Ante meridiem and Post meridiem
function lower_am_pm(dt)
{
  return ('' + dt.getFullYear()).substr(2);
}
console.log("_________________________________________");
console.log("Get lowercase Ante meridiem and Post meridiem :");
dt = new Date();
console.log(lower_am_pm(dt));

dt = new Date(1989, 10, 1);
console.log(lower_am_pm(dt));

// Get uppercase Ante meridiem and Post meridiem
function upper_am_pm(dt)
{
  return dt.getHours() < 12 ? 'AM' : 'PM';
}
console.log("_________________________________________");
console.log("Get uppercase Ante meridiem and Post meridiem :");
dt = new Date();
console.log(upper_am_pm(dt));

dt = new Date(1989, 10, 1);
console.log(upper_am_pm(dt));

// swatch Internet time
function internet_time(dt)
{
  return Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24);
}
console.log("_________________________________________");
console.log("Swatch Internet time :");
dt = new Date();
console.log(internet_time(dt));

dt = new Date(1989, 10, 1);
console.log(internet_time(dt));

// Get 12-hour format of an hour with leading zeros
function hours_with_zeroes(dt)
{
  return ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12);
}
console.log("_________________________________________");
console.log("Get 12-hour format of an hour with leading zeros :");
dt = new Date();
console.log(hours_with_zeroes(dt));

dt = new Date(1989, 10, 1);
console.log(hours_with_zeroes(dt));

// Get 24-hour format of an hour without leading zeros
function hours_without_zeroes(dt)
{
  return dt.getHours();
}
console.log("_________________________________________");
console.log("Get 24-hour format of an hour without leading zeros :");
dt = new Date();
console.log(hours_without_zeroes(dt));

dt = new Date(1989, 10, 1);
console.log(hours_without_zeroes(dt));

// Get minutes with leading zeros
function minutes_with_leading_zeros(dt)
{
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}
console.log("_________________________________________");
console.log("Get minutes with leading zeros :");
dt = new Date();
console.log(minutes_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(minutes_with_leading_zeros(dt));

// Get seconds with leading zeros
function seconds_with_leading_zeros(dt)
{
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}
console.log("_________________________________________");
console.log("Get seconds with leading zeros :");
dt = new Date();
console.log(seconds_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt));

// Get Timezone
function seconds_with_leading_zeros(dt)
{
  return /\((.*)\)/.exec(new Date().toString())[1];
}
console.log("_________________________________________");
console.log("Get Timezone :");
dt = new Date();
console.log(seconds_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt));

// Find whether or not the date is in daylights savings time
function daylights_savings(dt)
{
  var dst = null;
  for (var i = 0; i < 12; ++i)
    {
      var d = new Date(dt.getFullYear(), i, 1);
      var offset = dt.getTimezoneOffset();

      if (dst === null)
        dst = offset;
      else if (offset < dst)
         {
           dst = offset;
           break;
         }
      else if (offset > dst)
        break;
         }
return (dt.getTimezoneOffset() == dst) | 0;
}
console.log("_________________________________________");
console.log("Find whether or not the date is in daylights savings time :");
dt = new Date();
console.log(daylights_savings(dt));

dt = new Date(1989, 10, 1);
console.log(daylights_savings(dt));

// Get difference to Greenwich time in hours
function diff_to_GMT(dt)
{
   return (-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}
console.log("_________________________________________");
console.log("Get difference to Greenwich time in hours :");
dt = new Date();
console.log(diff_to_GMT(dt));

dt = new Date(1989, 10, 1);
console.log(diff_to_GMT(dt));

// Get timezone offset in seconds
function timezone_offset_in_seconds(dt)
{
   return -dt.getTimezoneOffset() * 60;
}
console.log("_________________________________________");
console.log("Get timezone offset in seconds :");
dt = new Date();
console.log(timezone_offset_in_seconds(dt));

dt = new Date(1989, 10, 1);
console.log(timezone_offset_in_seconds(dt));

// Add specified years to a date
function add_years(dt,n)
 {
 return new Date(dt.setFullYear(dt.getFullYear() + n));
 }
 console.log("_________________________________________");
 console.log("Add specified years to a date :");
dt = new Date();
console.log(add_years(dt, 10).toString());

dt = new Date(2014,10,2);
console.log(add_years(dt, 10).toString());

// Add specified weeks to a date
function add_weeks(dt, n)
 {
 return new Date(dt.setDate(dt.getDate() + (n * 7)));
 }
 console.log("_________________________________________");
 console.log("Add specified weeks to a date :");
dt = new Date();
console.log(add_weeks(dt, 10).toString());

dt = new Date(2014,10,2);
console.log(add_weeks(dt, 10).toString());

// Add specified months to a date
function add_months(dt, n)
 {

   return new Date(dt.setMonth(dt.getMonth() + n));
 }
 console.log("_________________________________________");
 console.log("Add specified months to a date :");
dt = new Date();
console.log(add_months(dt, 10).toString());

dt = new Date(2014,10,2);
console.log(add_months(dt, 10).toString());

// Get time differences in minutes between two dates
function diff_minutes(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));

 }
 console.log("_________________________________________");
 console.log("Get time differences in minutes between two dates :");
dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_minutes(dt1, dt2));

//Get time differences in hours between two dates
function diff_hours(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));

 }
 console.log("_________________________________________");
 console.log("Get time differences in hours between two dates :");
dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_hours(dt1, dt2));

dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));

// Get time differences in days between two dates
function diff_days(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff));

 }
 console.log("_________________________________________");
 console.log("Get time differences in days between two dates :");
dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,6);
console.log(diff_days(dt1, dt2));

dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));

// Get time differences in weeks between two dates
function diff_weeks(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.abs(Math.round(diff));

 }
 console.log("_________________________________________");
 console.log("Get time differences in weeks between two dates :");
dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_weeks(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));

// Get time differences in months between two dates
function diff_months(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diff));

 }
 console.log("_________________________________________");
 console.log("Get time differences in months between two dates :");
dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_months(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));

// Get time differences in years between two dates
function diff_years(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));

 }
 console.log("_________________________________________");
 console.log("Get time differences in years between two dates :");
dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_years(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2));

// Get the week start date
function startOfWeek(date)
  {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

    return new Date(date.setDate(diff));

  }
  console.log("_________________________________________");
  console.log("Get the week start date :");
dt = new Date();

console.log(startOfWeek(dt).toString());

// Get the week end date
function endOfWeek(date)
  {

    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));

  }
  console.log("_________________________________________");
  console.log("Get the week end date :");
dt = new Date();

console.log(endOfWeek(dt).toString());

// Get the month start date
function startOfMonth(date)
  {

   return new Date(date.getFullYear(), date.getMonth(), 1);

  }
  console.log("_________________________________________");
  console.log("Get the month start date :");
dt = new Date();

console.log(startOfMonth(dt).toString());

// Get the month end date
function endOfMonth(date)
  {

  return new Date(date.getFullYear(), date.getMonth() + 1, 0);

  }
  console.log("_________________________________________");
  console.log("Get the month end date :");
dt = new Date();

console.log(endOfMonth(dt).toString());
